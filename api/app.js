const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
app.use(helmet());

app.get('/', function(req, res){
    res.send('Servidor OK.');
});
app.use('/employees', require('./routes/employee.route'));

module.exports = app;