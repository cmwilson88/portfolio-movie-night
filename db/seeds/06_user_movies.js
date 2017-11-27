
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_movies').insert([
        {
          user_id: 1,
          movie_id: 155
        },
        {
          user_id: 1,
          movie_id: 49026
        },
        {
          user_id: 1,
          movie_id: 157336
        },
        {
          user_id: 2,
          movie_id: 49026
        },   
        {
          user_id: 3,
          movie_id: 155
        },
        {
          user_id: 3,
          movie_id: 157336
        }
      ]);
    });
};
