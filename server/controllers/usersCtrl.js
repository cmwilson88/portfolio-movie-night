import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import knex from '../../db/knex';
import commonValidations from '../../src/shared/validations/signup';


function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return knex('users')
          .where('username', data.username)
          .orWhere('email', data.email)
            .then(user => {
              user = user[0]
              if(user) {
                if(user.username === data.username) {
                  errors.username = 'There is user with such username'
                }
                if(user.email === data.email) {
                  errors.email = 'There is user with such email'
                }
              }

              return {
                errors,
                isValid: isEmpty(errors)
              }
            })
}


export function createNewUser(req, res) {
  
  validateInput(req.body, commonValidations).then(({ errors, isValid}) => {
    if(isValid) {
      const {username, password, email} = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
    
      knex('users').insert({
        username,
        email,
        password_digest
      }).then(user => {
          res.status(200).json({ success: true })
      }).catch(err => {
          res.status(500).json({ error: err })
      })
    } else {
      res.status(400).json(errors);
    }
    
  });

}

export function checkIfUserExists(req, res) {
  knex.select('username', 'email').from('users')
    .where('username', req.params.identifier)
    .orWhere('email', req.params.identifier)
      .then(user => {
        res.json({user})
      })
      .catch(err => res.status(500).json(err))
}