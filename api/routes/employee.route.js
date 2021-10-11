const express = require('express');
const router = express.Router();
const { addEmployee, deleteEmployee, getEmployeeById, getAllEmployees, updateEmployee } = require('../controllers/employee.controller');

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.post('/', addEmployee);

module.exports = router;