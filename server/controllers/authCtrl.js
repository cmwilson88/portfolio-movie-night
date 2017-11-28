import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';
import knex from '../../db/knex';
import config from '../../config';

export function login(req, res) {
  const { identifier, password } = req.body;

  knex('users')
    .where('username', identifier)
    .orWhere('email', identifier)
    .then(user => {
      if( user[0] ) {
        user = user[0]
        if (bcrypt.compareSync(password, user.password_digest)) {
          const token = jwt.sign({
            id: user.id,
            username: user.username
          }, config.JWT_SECRET)
          res.json({ token })
        } else {
          res.status(401).json({
            errors: {
              form: 'Invalid credentials'
            }
          })
        }
      } else {
        res.status(401).json({
          errors: {
            form: 'Invalid credentials'
          }
        })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
}
