
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_genres').insert([
        {
          genre_id: 18,
          movie_id: 155
        },
        {
          genre_id: 28,
          movie_id: 155
        },
        {
          genre_id: 80,
          movie_id: 155
        },
        {
          genre_id: 53,
          movie_id: 155
        },
        {
          genre_id: 28,
          movie_id: 49026
        },
        {
          genre_id: 80,
          movie_id: 49026
        },
        {
          genre_id: 18,
          movie_id: 49026
        },
        {
          genre_id: 53,
          movie_id: 49026
        },
        {
          genre_id: 12,
          movie_id: 157336
        },
        {
          genre_id: 18,
          movie_id: 157336
        },
        {
          genre_id: 878,
          movie_id: 157336
        },
      ]);
    });
};
