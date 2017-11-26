
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {
          key: 'kmJLuwP3MbY',
          movie_id: 155,
        },
        {
          key: '7gFwvozMHR4',
          movie_id: 49026,
        },
        {
          key: 'Rt2LHkSwdPQ',
          movie_id: 157336,
        }
      ]);
    });
};
