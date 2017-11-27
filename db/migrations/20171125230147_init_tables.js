
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('password_digest').notNullable();
    table.timestamps();
  })
  .createTable('movies', table => {
    table.integer('id').notNullable().unique();
    table.string('title').notNullable();
    table.string('poster_path').notNullable();
    table.string('backdrop_path').notNullable();
    table.text('overview').notNullable();
    table.string('release_date').notNullable();
    table.decimal('vote_average', 3, 1).notNullable();
  })
  .createTable('user_movies', table => {
    table.increments();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.integer('movie_id').references('id').inTable('movies').notNullable();
  })
  .createTable('movie_videos', table => {
    table.increments();
    table.string('key').notNullable();
    table.integer('movie_id').references('id').inTable('movies').notNullable();
  })
  .createTable('genres', table => {
    table.integer('id').notNullable().unique();
    table.string('name').notNullable();
  })
  .createTable('movie_genres', table=> {
    table.increments();
    table.integer('genre_id').references('id').inTable('genres').notNullable();
    table.integer('movie_id').references('id').inTable('movies').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('movie_videos')
    .dropTableIfExists('user_movies')
    .dropTableIfExists('movie_genres')
    .raw('drop table if exists genres cascade')
    .raw('drop table if exists users cascade')
    .raw('drop table if exists movies cascade')
};
