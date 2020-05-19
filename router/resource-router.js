const express = require('express');
const db = require('./resource-helper');

const router = express.Router();

router.get('/', (req, res) => {
	db
		.getResources()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.get('/:id', (req, res) => {
	db
		.getResource(req.params.id)
		.then((resource) => {
			res.status(200).json(resource);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.post('/', (req, res) => {
	db
		.addResource(req.body)
		.then((response) => {
			db.getResource(response).then((resource) => {
				res.status(201).json(resource);
			});
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

module.exports = router;
