var express = require('express');
var router = express.Router();
var employeeManager = require('../controllers/employeeManager.js');

/* Show specific employee information */

/*
router.get('/', employeeManager.findById);

router.put('/', employeeManager.updateEmployee);
*/
router.get('/', function(req, res, next) {
  res.render('edit_employee');
});

module.exports = router;
