import express from 'express';
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