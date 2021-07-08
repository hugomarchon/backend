
exports.up = function(knex) {
  return knex.schema.createTable("tarefas", function(table){
    table.increments();
    table.string('usuario').notNullable();
    table.string('tarefas').notNullable();

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("tarefas")
  
};
