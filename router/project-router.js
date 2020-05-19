const express = require('express');
const db = require('./project-helpers');
const addTaskDb = require('./tasks-helper');

const router = express.Router();

router.get('/', (req, res) => {
	db
		.getProjects()
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((error) => {
			res.status(500).json({ error: error.message });
		});
});

router.get('/:id', (req, res) => {
	db
		.getProject(req.params.id)
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.post('/', (req, res) => {
	db
		.addProject(req.body)
		.then(() => {
			db
				.getProjects()
				.then((response) => {
					res.status(201).json(response);
				})
				.catch((error) => {
					res.status(500).json(error.message);
				});
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.post('/tasks/:id', (req, res) => {
	req.body.project_id = req.params.id;
	addTaskDb
		.addTask(req.body)
		.then((response) => {
			res.status(201).json({ TaskID: response });
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

module.exports = router;
