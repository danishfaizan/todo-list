exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('email').notNullable().primary();
    table.string('name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
