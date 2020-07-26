const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM "movies"';
  
    pool.query(queryString)
      .then(result => {
        res.send(result.rows);
      }).catch(error => {
        console.log(error);
        res.send(500);
      });
  }); 

  router.get('/:id', (req, res) => {
    console.log('req.body', req.params);
    
    const queryString = `
    SELECT movies.title, movies.description, movies.poster 
    FROM movies 
    WHERE movies.id =${req.params.id};`
  
    pool.query(queryString)
      .then(result => {
        res.send(result.rows[0]);
      }).catch(error => {
        console.log(error);
        res.send(500);
      });
  }); 

module.exports = router;