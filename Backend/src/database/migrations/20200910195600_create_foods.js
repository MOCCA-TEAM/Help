
exports.up = function(knex) {
    return knex.schema.createTable('foods', function (table){
    table.increments();
    table.string('tipo').notNullable();
    table.decimal('preco').notNullable();
    table.string('valornutricional').notNullable();
    table.string('petshop_id').notNullable();
    table.foreign('petshop_id').references('id').inTable('petshops');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('foods');
};
