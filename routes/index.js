var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  return res.render('login');
 });

module.exports = router;
