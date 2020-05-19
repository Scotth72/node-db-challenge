const express = require('express');
const db = require('./tasks-helper');

const router = express.Router();

router.get('/', (req, res) => {
	db
		.getTask()
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

module.exports = router;
