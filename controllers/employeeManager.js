var employee = require('../models/employee.js');

exports.findAll = function(req, res) {
  product.find(function(error, employeeList) {
    if(error) { res.send(500, error.message); }
    res.status(200).jsonp(employeeList);
  });
  //res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Employee: ' + id);
  employee.findbyId(id, function(error, found) {
    if(error) { res.send(500, console.error.message);}
    res.status(200).json(found);
  });
};

exports.addEmployee = function(req, res) {
  console.log(req.body);

  //Create a new instane of the employee model
  var newEmployee = new employee({
    photo: req.body.photo,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    address: req.body.address,
    username: req.body.username,
    password: req.body.password
  });

  //Save the employee and heck for errors
  newEmployee.save(function (error, product) {
    if(error) { return res.send(500, error.message); }
    //res.status(200).json(employee);
    res.json({ message: 'Employee created!' });
  });
};
