var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  photo: String,
  lastName: String,
  firstName: String,
  address: String,
  username: String,
  password: String
});

module.exports = mongoose.model('employee', employeeSchema);
