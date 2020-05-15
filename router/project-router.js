const express = require('express');
const db = require('./project-helpers');

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

module.exports = router;
