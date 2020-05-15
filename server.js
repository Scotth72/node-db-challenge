const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./router/project-router');
const resourceRouter = require('./router/resource-router');
const taskRouter = require('./router/task-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
	res.send('Server is working');
});

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;
