var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Navy' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', {name: "Nav", age: 19, year: 2021, school: "NYU"})
});
module.exports = router;
