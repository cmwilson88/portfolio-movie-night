
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('password_digest').notNullable();
    table.timestamps();
  })
  .createTable('movies', table => {
    table.increments();
    table.integer('tmdb_id').notNullable().unique();
    table.string('title').notNullable();
    table.string('poster_path').notNullable();
    table.string('backdrop_path').notNullable();
    table.text('overview').notNullable();
    table.string('release_date').notNullable();
    table.decimal('vote_average', 3, 1).notNullable();
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users').dropTable('movies')
};
