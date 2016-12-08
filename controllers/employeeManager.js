var employee = require('../models/employee.js');

//GET
exports.findAll = function(req, res) {
  employee.find(function(error, employeeList) {
    if(error) { return res.send(500, error.message); }
    res.render('employee', {
      employee: employeeList
    });
    //return res.status(200).jsonp(employeeList);
  });
};

//GET
exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Employee: ' + id);
  employee.findbyId(id, function(error, found) {
    if(error) { res.send(500, console.error.message);}
    res.status(200).json(found);
  });
};

//POST
exports.addEmployee = function(req, res) {
  console.log(req.body);

  //Create a new instane of the employee model
  var newEmployee = new employee({
    employeeId: req.body.employeeId,
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
