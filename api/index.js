const app = require('./app');
require('dotenv').config({path:__dirname+'/./.env'})
require('./database');

async function init() {
    await app.listen(process.env.PORT || 3009);
    console.log('App running on port: ' , process.env.PORT || 3009);
}

init();