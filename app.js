//Dependencias
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var employeeManager = require('./controllers/employeeManager.js');

//Connect to the database
mongoose.connect('mongodb://localhost/employee');

var app = express();
var employee = express.Router();
var db = mongoose.connection;

var login = require('./routes/index');
var employee = require('./routes/employee');
var add = require('./routes/add_employee');
var edit = require('./routes/edit_employee');

db.on('error', console.log.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Connection Successful');
});

// Declarar middlewares que va a usar la API
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', login);
app.use('/employee', employee);
app.use('/employee/add', add);
app.use('/employee/edit', edit);

employee.route('/employee')
  .get(employeeManager.findAll); //READ
employee.route('/employee/add')
  .post(employeeManager.addEmployee); //Insert
employee.route('employee/:id')
  .get(employeeManager.findById)
  //.put(employeeManager.updateEmployee)
  //.delete(employeeManager.deleteEmployee);

// Make our db accessible to our router
/*
app.use(function(req,res,next){
    req.db = db;
    next();
});
*/

/*
app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
