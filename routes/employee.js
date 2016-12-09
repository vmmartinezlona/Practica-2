var express = require('express');
var router = express.Router();
var employeeManager = require('../controllers/employeeManager.js');

/* GET employee page. */
/*router.get('/', function(req, res, next) {
  res.render('employee');
});
*/
router.get('/', employeeManager.findAll); //READ

/*router.get('/:id', function(req, res, next) {
  res.render('login');
});*/
//router.get('/:id', employeeManager.findById);

module.exports = router;
