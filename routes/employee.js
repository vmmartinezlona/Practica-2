var express = require('express');
var router = express.Router();
var Employee = require('../models/employee.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('employee');
/*
  employee.find(function(error, employeeList){
    if(error) {
      res.sed(500, error.message);
    }
    res.render('employee', {
      title: 'Employee'
      employee: employeeList
    });
  });
});

router.post('/', function(req, res) {
  console.log(req.body);

  var employee = new Employee({
    photo: req.body.photo,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    address: req.body.address,
    username: req.body.username,
    password: req.body.password
  });

  employee.save(function(error, product){
    if(error){
      res.send(500, error.message);
    }
    Employee.find(function(error, employeeList){
      if(error){
        res.send(500, error.message);
      }
      res.render('employee');
    });
  });*/
});

module.exports = router;
