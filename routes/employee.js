var express = require('express');
var router = express.Router();
var Employee = require('../models/employee.js');
var employeeManager = require('../controllers/employeeManager.js');

/* GET employee pages and listen employeeList.
router.get('/', function(req, res, next) {
  Employee.find(function(error, employeeList){
    if(error) { res.sed(500, error.message); }
    res.render('employee', {
      employee: employeeList
    });
  });
});
*/

/*
var renderFunction = function(req, res, next) {
  res.render('employee');
//  next();
};
*/
router.get('/', employeeManager.findAll); //READ

router.get('/:id', employeeManager.findById);

module.exports = router;
