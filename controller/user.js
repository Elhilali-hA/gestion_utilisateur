// const bodyParser = require('body-parser');
const db = require('../config/database.js');
const env = require('../config/env.js');

const User = db.users;

const departs = db.depart

// Post a User
exports.create = (req, res) => {	
	// Save to MySQL database
	User.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
	  email: req.body.email,
	  password: req.body.password,
	  depart_id: req.body.depart_id
	}).then(user => {		
		res.redirect('/users')
	  
	  });
	
};
 
// FETCH all Users
exports.findAll = (req, res) => {
	User.findAll().then(users => {	
	  res.render('users', {
		   user : users
	  });
	})
	.catch(err => console.log('error:' + err))
	departs.findAll().then(depart => {	
		res.render('users', {
			alldeparts : depart
		});
	  })
	  .catch(err => console.log('error:' + err))
};




exports.home = (req, res) => {	
	departs.findAll().then(depart => {	
		res.render('index', {
			alldeparts : depart
		});
	  }) 
	  
	
};

// Find a User by Id
// exports.findById = (req, res) => {	
// 	User.findById(req.params.userId).then(user => {
// 		user

// 	})
// };
 
// Update a User
exports.update = (req, res) => {
	const id = req.body.id;
	console.log(req.body)
	User.update( { ...req.body}, 
		{ where: {id: id} }
	).then(() => {
		res.redirect('/users')
	});
};
 
// Delete a UserUser by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	User.destroy( { where: { id: id }
	}).then(() => {	
		res.redirect('/users')
	});
};