const employeeMethods = {};
const employeeModel = require('../models/employeeModel');
var ObjectId = require('mongodb').ObjectId; 

employeeMethods.addEmployee = async (req , res) => {
    try {
        const { firstName, lastName, title, dateOfBirth, email, gender, deparment, city, country, jobTitle, phone } = req.body;
        
        const foundEmployee = await employeeModel.findOne({email: email});

        if (!foundEmployee) {

            const newEmployee = new employeeModel({
                firstName, lastName, title, dateOfBirth, email, gender, deparment, city, country, jobTitle, phone
            });

            await newEmployee.save();

            res.status(200);
            res.json({
                success: true,
                employee: newEmployee,
                message: "Employee added successfully"
            });
        } else {
            res.status(500).send(res.json({
                message: 'An error has occured. There is an existing employee with the entered email',
                success: false,
                exception: 'EmployeeControllerException'
            }));
        }
    } catch (error) {
        res.status(500).send(res.json({
            message: 'An error has occured ' + error.message,
            success: false,
            exception: 'EmployeeControllerException'
        }));
    }
}

employeeMethods.getEmployeeById = async (req , res) => {
    const employeeId = req.params.id;

    const employee = await employeeModel.findOne({_id: ObjectId(employeeId)});

    if (employee) {
        res.status(200).send(res.json({
            success: true,
            employee: employee,
            message: "Employee founded"
        }));
    } else {
        res.status(500).send(res.json({
            success: false,
            message: "Employee not found",
            exception: "EmployeeNotFoundException"
        }));
    }
}

employeeMethods.getAllEmployees = async (req , res) => {
    let employees = [];

    employees = await employeeModel.find();

    res.status(200).send(res.json({
        success: true,
        employees: employees,
        message: "Employees founded"
    }));
}

employeeMethods.updateEmployee = async (req , res) => {
    const { firstName, lastName, title, dateOfBirth, email, gender, deparment, city, country, jobTitle, phone } = req.body;
    const employeeId = req.params.id;
    const updatedDatetime = new Date();

    try {
        
        const foundEmployee = await employeeModel.findOne({email: email});

        if (!foundEmployee || foundEmployee.id === employeeId) {
            const updatedEmployee = await employeeModel.findOne({_id: ObjectId(employeeId)}).updateOne({$set: { firstName, lastName, title, dateOfBirth, email, gender, deparment, city, country, jobTitle, phone, updatedDatetime}});

            res.status(200).send(res.json({
                success: true,
                employee: updatedEmployee,
                message: "Employee was updated successfully"
            }));
        } else {
            res.status(500).send(res.json({
                success: false,
                message: "Employee was not updated. There is an existing employee with that email.",
                exception: "UpdateEmployeeException"
            }));
        }
    } catch (error) {
        res.status(500).send(res.json({
            success: false,
            message: "Employee was not updated.",
            stackTrace: error.message,
            exception: "UpdateEmployeeException"
        }));
    }
}

employeeMethods.deleteEmployee = async (req , res) => {
    const employeeId = req.params.id;
    
    try {
        await employeeModel.findByIdAndRemove(employeeId);
        return res.json({
            success: true,
            message: "Employee removed successfully"
        });
    } catch (error) {
        res.status(500).send(res.json({
            success: false,
            message: "Employee was not deleted.",
            stackTrace: error.message,
            exception: "DeleteEmployeeException"
        }));
    }
}

module.exports = employeeMethods;