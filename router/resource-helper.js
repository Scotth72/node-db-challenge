const db = require('../data/db-config');

module.exports = {
	getResources,
	getResource,
	addResource
};

function getResources() {
	return db('resources');
}

function getResource() {
	return db('resources').where({ id });
}

function addResource(resource) {
	return db('resources').insert(resource);
}
