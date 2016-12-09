var express = require('express');
var router = express.Router();
var employeeManager = require('../controllers/employeeManager.js');

/* GET employee page. */

router.get('/', employeeManager.findAll); //READ

/*
router.get('/:id', function(req, res, next) {
  res.render('edit_employee');
});
*/
router.get('/:id', employeeManager.findById);
router.put('/:id', employeeManager.updateEmployee);
router.delete('/:id', employeeManager.deleteEmployee);

module.exports = router;
