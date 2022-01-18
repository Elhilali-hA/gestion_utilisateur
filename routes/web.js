const express = require('express')
const router = express.Router()
const user = require('../model/user')

// router.get('/', (req,res) => res.send('hellooooo'))

module.exports = function(app) {
 
    const users = require('../controller/user.js');

    app.get('/', users.home)
 
    // Create a new User
    app.post('/users', users.create);
 
    // Retrieve all User
    app.get('/users', users.findAll);
 
    // Retrieve a single User by Id
    app.get('/users/:userId', users.findById);
 
    // Update a User with Id
    app.put('/users/:userId', users.update);
 
    // Delete a User with Id
    app.delete('/users/:userId', users.delete);
 
}



// module.exports = router
