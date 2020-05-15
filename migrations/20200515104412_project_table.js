exports.up = function(knex) {
	return knex.schema.createTable('projects', (tbl) => {
		tbl.increments('id');
		tbl.string('name', 128).notNullable().unique();
		tbl.string('description', 256);
		tbl.boolean('complete').defaultTo(false);
	});
};

exports.down = function(knex) {};
