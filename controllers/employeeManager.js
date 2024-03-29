var employee = require('../models/employee.js');

//GET
exports.findAll = function(req, res) {
  employee.find(function(error, employeeList) {
    if(error) { return res.send(500, error.message); }
    return res.render('employee', {
      employee: employeeList
    });
    return res.status(200).jsonp(employeeList);
  });
};

//GET
exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Employee: ' + id);
  employee.findById(req.params.id, function(error, found) {
    if(error) { return res.send(500, console.error.message); }
    return res.render('edit_employee', {
      employee: found
    });
    return res.status(200).json(found);
  });
};

//PUT
exports.updateEmployee = function(req, res) {
  var id = req.params.employee_id;
  employee.findById(id, function(error, selectedEmployee) {
    if(error) { return res.send(500, console.error.message); }
    //updateinfo
    selectedEmployee.photo = req.body.photo;
    selectedEmployee.lastName = req.body.lastName;
    selectedEmployee.firstName = req.body.firstName;
    selectedEmployee.address = req.body.address;
    selectedEmployee.username = req.body.username;
    selectedEmployee.password = req.body.password;
    //save the employee
    selectedEmployee.save(function(error) {
      if(error) { return res.send(500, console.error.message); }
      employee.find(function(error, employeeList) {
        if(error) { return res.send(500, error.message); }
        return res.render('employee', {
          employee: employeeList
        });
        return res.status(200).jsonp(employeeList);
      });
    });
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
  newEmployee.save(function (error) {
    if(error) { return res.send(500, error.message); }
    employee.find(function(error, employeeList) {
      if(error) { return res.send(500, error.message); }
      return res.render('employee', {
        employee: employeeList
      });
      return res.status(200).jsonp(employeeList);
    });
  });
};

//DELETE
exports.deleteEmployee = function(req, res) {
  employee.remove({ _id: req.params.employee_id }, function(error, selectedEmployee) {
      if(error) { return res.send(500, error.message); }
      employee.find(function(error, employeeList) {
        if(error) { return res.send(500, error.message); }
        return res.render('employee', {
          employee: employeeList
        });
        return res.status(200).jsonp(employeeList);
      });
    });
};
