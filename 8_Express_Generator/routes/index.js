var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=["Name: Anish","Age: 20","Place: Kochi"]

  //person object
  const person={name:"Anish",age:"20",comment:{comment: "Hi im Anish",date:"14-5-2023"},admin:false}

  res.render('index', {person});
});

module.exports = router;
