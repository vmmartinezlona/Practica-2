var express = require('express');
var router = express.Router();
var Employee = require('../models/employee.js')

/* GET employee pages and listen employeeList. */
router.get('/', function(req, res, next) {
  Employee.find(function(error, employeeList){
    if(error) { res.sed(500, error.message); }
    res.render('employee', {
      employee: employeeList
    });
  });
});

module.exports = router;
