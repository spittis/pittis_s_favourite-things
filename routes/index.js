var express = require('express');
var router = express.Router();

var connect = require('../utils/sqlConnect');

/* GET home page. */
router.get('/', function(req, res, next) {
// do a database query and get some of the hero data
connect.query(`SELECT name, avatar FROM hero`, (err, result) => {
  if (err) {
    throw err;
    console.log(err);
  } else {
    console.log(result);
    res.render('index', { avatars: result });
  }
  });
});

// want to make a database call to get the image and name, rendering it with the route and putting it in index.js
// with npm install, you get hte package that lets you communicate with back end --> in terminal, we typed out: npm i -D mysql


// get individual data/bio info

router.get('/:hero', function(req, res, next) { //the hero thing doesn't really matter what name it is, it will change to thor, peter, carol or whatever hero //req means request for a resource
  connect.query(`SELECT * FROM hero WHERE name="${req.params.hero}"`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('bio', { bioData: result[0] }); //result comes back in an array
    }
    });
  });



module.exports = router;


