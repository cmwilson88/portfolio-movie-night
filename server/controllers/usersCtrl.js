import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import knex from '../../db/knex';

export function createNewUser(req, res) {
  const {username, password, email} = req.body;
  const password_digest = bcrypt.hashSync(password, 10);

  knex('users').insert({
    username,
    email,
    password_digest
  }).then(() => {
    knex.select().from('users')
      .then(users => {
        res.status(200).json(users)
      })
  }).catch(err => {
      res.status(500).json(err)
  })
}

export function checkIfUserExists(req, res) {
  knex.select('username', 'email').from('users')
    .where('username', req.params.identifier)
    .orWhere('email', req.params.identifier)
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err))
}