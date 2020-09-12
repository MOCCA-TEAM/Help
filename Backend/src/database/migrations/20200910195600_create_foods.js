
exports.up = function(knex) {
    return knex.schema.createTable('foods', function (table){
    table.increments();
    table.string('category').notNullable();
    table.string('type').notNullable();
    table.string('product').notNullable();
    table.decimal('price').notNullable();
    table.string('ntvalue').notNullable();
    table.string('petshop_id').notNullable();
    table.foreign('petshop_id').references('id').inTable('petshops');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('foods');
};
