var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send({
    id: 1,
    name: 'Jessica',
    title: 'CEO'
  });
});

router.get('/test1', function(req, res, next) {
  res.send({
    id: 2,
    name: 'John',
    title: 'CFO'
  });
});

module.exports = router;
