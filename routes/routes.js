const express = require('express');
const router = express.Router();
const { Role, User } = require('../models/models');

router.post('/roles', async (req, res) => {
    try {
        const role = new Role(req.body);
        await role.save();
        res.status(201).send(role);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/roles', async (req, res) => {
    try {
        const roles = await Role.find({});
        res.status(200).send(roles);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// CRUD for Users
router.post('/users', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  router.get('/users', async (req, res) => {
    try {
      const users = await User.find().populate('role');
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  module.exports = router;

