const express = require('express');
const connectDB = require('./db/database')
const router = require('./routes/routes');

const server = express();
connectDB();

server.use(express.json());
server.use('/', router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
