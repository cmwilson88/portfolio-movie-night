import multiline from 'multiline';

export const getMovieDetailsQuery = multiline.stripIndent(function() {/*
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
  where m.id = :movie_id
*/});

