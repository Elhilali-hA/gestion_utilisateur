const express = require('express')
const router = express.Router()

module.exports = function(app) {
 
    const users = require('../controller/user.js');
    const depart = require('../controller/depart.js');

    app.get('/', users.home)
 
    // Create a new User
    app.post('/users', users.create);
 
    // Retrieve all User
    app.get('/users', users.findAll);
 
    // Retrieve a single User by Id
    // app.get('/users/:userId', users.findById);
 
    // Update a User with Id
    app.post('/users/:userId', users.update);
 
    // Delete a User with Id
    app.get('/users/:userId', users.delete);






    // departmet


    app.post('/depart', depart.creatdepart);
    

    app.get('/depart', depart.findepart);
 
}




