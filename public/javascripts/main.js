

$(function() {
    url = 'http://localhost:3000/employee';
    $get(url, function(employees) {
      employees.listEmployee.forEach(function(currenteElement) {
        var employeeId = currenteElement.id;
        var employeeName = currenteElement.lastName + ' ' + currenteElement.firstName;
        $('.a').html('<a href="http://localhost:3000/employee' + employeeId + '">' + employeeName + '</a>');
      });
    });
  });
