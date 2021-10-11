const {Schema , model} = require('mongoose');

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    deparment: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    createdDatetime: {
        type: Date,
        default: new Date()
    },
    updatedDatetime: {
        type: Date,
        required: false
    }
});

module.exports = model('Employee' , employeeSchema);