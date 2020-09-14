const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./users-auth/authenticate-middleware');
const authRouter = require('./users-auth/auth-router.js');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);

module.exports = server;