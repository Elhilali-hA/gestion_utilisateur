const express = require('express')
const router = express.Router()

module.exports = function(app) {
 
    const users = require('../controller/user.js');
    const depart = require('../controller/depart.js');
 
   

    app.get('/', users.home)

     // users
 
    app.post('/users', users.create);
 
    app.get('/users', users.findAll);

    app.post('/users/:userId', users.update);
 
    app.get('/users/:userId', users.delete);






    // departmet


    app.post('/depart', depart.creatdepart); 

    app.get('/depart', depart.findepart);

    app.post('/depart/:departId', depart.update);
 
    app.get('/depart/:userId', depart.delete);
 
}




