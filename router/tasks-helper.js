const db = require('../data/db-config');

module.exports = {
	getTask,
	addTask
};

function getTask() {
	return db('tasks')
		.select('tasks.description', 'projects.name', 'projects.description')
		.join('projects', 'tasks.project_id', 'projects.id');
}

function addTask(task) {
	return db('tasks').insert(task);
}
