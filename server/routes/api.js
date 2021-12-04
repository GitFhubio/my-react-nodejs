var express = require('express');
var router = express.Router();
const executeQuery=require('../modules/sqlscript.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/meetups', function(req, res, next) {
  executeQuery(`select * from meetups`,function(err,result){
    results=JSON.parse(JSON.stringify(result));
    res.send(results);
 });
});

module.exports = router;
