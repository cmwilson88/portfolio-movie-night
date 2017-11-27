import knex from '../../db/knex';
import knex_populate from 'knex-populate';
import { getMovieDetailsQuery } from '../../db/queries/movies';


module.exports = {
  getMovieDetails: function(req, res) {
    // getMovieDetails is mulitline raw sql query.
    knex.raw(getMovieDetailsQuery, {
        movie_id: req.params.movie_id
      })
      .then(results => {
        res.status(200).json(results.rows)
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
  }  
}