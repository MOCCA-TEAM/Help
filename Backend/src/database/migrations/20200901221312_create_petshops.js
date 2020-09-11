
exports.up = function(knex) {
  return knex.schema.createTable('petshops', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
      table.string('email').notNullable();
      table.string('description').notNullable();
      table.string('phone').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('petshops');
};
