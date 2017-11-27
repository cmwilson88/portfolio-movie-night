import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import multiline from 'multiline';
import knex from '../db/knex';
import knex_populate from 'knex-populate';

const app = express();
const PORT = 3001;

app.get('/movies', (req, res) => {
  knex.select().from('movies').then(movies => {
    res.json(movies);
  })
})

app.get('/movies-with-videos', (req, res) => {
  const query = multiline.stripIndent(function() {/*
    select m.*, 
    (
        select array_to_json(array_agg(e))
        from (
            select g.id, g.name
            from genres g
            join movie_genres mg on mg.movie_id = m.id and mg.genre_id = g.id
        ) e
    ) as genres,
    (
        select array_to_json(array_agg(f))
        from (
            select mv.id, mv.key
            from movie_videos mv
            where mv.movie_id = m.id
        ) f
    ) as videos
from movies m
  */});
  knex.raw(query)
    .then(results => res.json(results.rows))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))