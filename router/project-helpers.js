const db = require('../data/db-config');

module.exports = {
	getProjects,
	addProject,
	getProject
};

function getProjects() {
	return db('projects');
}

function addProject(project) {
	return db('projects').insert(project);
}

function getProject(id) {
	return db('projects').where({ id });
}
