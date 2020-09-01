const express = require('express');

const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter');
const tasksRouter = require('./tasks/tasksRouter');

const server = express();

server.use(express.json());
server.use('/projects', projectsRouter);
server.use('/resources', resourcesRouter);
server.use('/tasks', tasksRouter);

module.exports = server;