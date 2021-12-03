var express = require('express');
var router = express.Router();
const executeQuery=require('../modules/sqlscript.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/newmeetup/', function(req, res, next) {
  // res.setHeader('Content-type','application/json');
  // console.log(req.body);
  // res.send('elleh 2');
   executeQuery(`insert into meetups(image,title,description,address) values('${req.body.image}','${req.body.title}','${req.body.description}','${req.body.address}')`,function(err,result){
     res.send('meetup registrato');
  });
});
module.exports = router;
