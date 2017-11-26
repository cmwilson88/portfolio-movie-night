
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          tmdb_id: 155,
          title: 'The Dark Knight',
          poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
          overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
          release_date: '2008-07-16',
          vote_average: 8.3,
        },
        {
          tmdb_id: 49026,
          title: 'The Dark Knight Rises',
          poster_path: '/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg',
          backdrop_path: '/3bgtUfKQKNi3nJsAB5URpP2wdRt.jpg',
          overview: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
          release_date: '2012-07-16',
          vote_average: 7.6,
        },
        {
          tmdb_id: 157336,
          title: 'Interstellar',
          poster_path: '/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg',
          backdrop_path: '/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
          overview: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
          release_date: '2014-11-05',
          vote_average: 7.9,
        },
      ]);
    });
};
