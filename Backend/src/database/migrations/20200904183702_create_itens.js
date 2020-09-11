exports.up = function(knex) {
  return knex.schema.createTable('itens', function(table){
      table.increments();

      table.string('name').notNullable();
      table.string('price').notNullable();
      table.string('description').notNullable();

      table.string('petshop_id');

      table.foreign('petshop_id').references('id').inTable('petshop')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('itens')
};
