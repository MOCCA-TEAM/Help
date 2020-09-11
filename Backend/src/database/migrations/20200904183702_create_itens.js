exports.up = function(knex) {
  return knex.schema.createTable('itens', function(table){
      table.increments();

      table.string('name').notNullable();
      table.string('price').notNullable();
      table.string('description').notNullable();
      /*table.blob('picture').notNullable();

      table.string('petshops_id');

      table.foreign('petshops_id').references('id').inTable('petshops')*/
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('itens')
};
