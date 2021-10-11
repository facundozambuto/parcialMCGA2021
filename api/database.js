require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;
const uri = process.env.CONNECTIONSTRING;

function connectDB() {
    mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    db.on('open' , _ => {
        console.log('Database connected');
    });

    db.on('error' , err => {
        console.log(err);
    });
}   

connectDB()