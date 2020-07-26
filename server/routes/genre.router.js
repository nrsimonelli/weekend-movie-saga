const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


router.get('/:id', (req, res) => {
    const queryString = `
    SELECT genres.name
    FROM movie_genres  
    JOIN genres ON movie_genres.genre_id = genres.id
    WHERE movie_genres.movie_id =${req.params.id};`
  
    pool.query(queryString)
      .then(result => {
        res.send(result.rows);
      }).catch(error => {
        console.log(error);
        res.send(500);
      });
  }); 

module.exports = router;