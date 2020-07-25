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

module.exports = router;