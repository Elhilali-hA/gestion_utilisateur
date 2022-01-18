const bodyParser = require('body-parser');
const db = require('../config/database.js');
const env = require('../config/env.js');

const User = db.users;

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	User.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
	  email: req.body.lastname,
	  password: req.body.password,
	}).then(user => {		
		res.send(user);
	});
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	User.findAll().then(users => {	 
	  res.render('users', {
		  users : res.body
	  });
	})
	.catch(err => console.log('error:' + err))
};

exports.home = (req, res) => {	 
	  res.render('index');
	
};

// Find a User by Id
exports.findById = (req, res) => {	
	User.findById(req.params.userId).then(user => {
		res.send(user);
	})
};
 
// Update a User
exports.update = (req, res) => {
	const id = req.params.userId;
	User.update( { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email }, 
		{ where: {id: req.params.userId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a user with id = ' + id });
	});
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	User.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
	});
};