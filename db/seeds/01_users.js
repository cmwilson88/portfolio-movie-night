
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'cmwilson',
          email: 'cmwilson@gmail.com', 
          password_digest: 'rowValue2'
        },
        {
          username: 'meginocc',
          email: 'meginocc@gmail.com', 
          password_digest: 'rowValue3'
        },
        {
          username: 'younglapdc',
          email: 'younglapdc@gmail.com', 
          password_digest: 'rowValue1'
        },
      ]);
    });
};
