import express from 'express';
import moviesCtrl from '../controllers/moviesCtrl';

let router = express.Router();

router.get('/:movie_id', moviesCtrl.getMovieDetails);


export default router;