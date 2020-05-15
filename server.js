const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./router/project-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
	res.send('Server is working');
});

module.exports = server;
