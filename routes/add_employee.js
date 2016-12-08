var express = require('express');
var router = express.Router();
var Employee = require('../models/employee.js');
var employeeManager = require('../controllers/employeeManager.js');

/* GET employee page. */
router.get('/', function(req, res, next) {
  res.render('add_employee');
});

/*POST new employee*/
router.post('/', employeeManager.addEmployee);

module.exports = router;
