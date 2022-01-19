const db = require('../config/database.js');
const env = require('../config/env.js');

const depart = db.depart;

// Post a depart
exports.creatdepart = (req, res) => {	
	// Save to MySQL database
	depart.create({  
	  title: req.body.title,
	  description: req.body.description,
	}).then(depart => {		
		res.redirect('/depart')
	  })
      .catch(err => console.log('error:' + err))
	
};
 
// FETCH all departs
exports.findepart = (req, res) => {
	depart.findAll().then(departs => {	
	  res.render('depart', {
		  depart : departs
	  });
	})
	.catch(err => console.log('error:' + err))
};

exports.home = (req, res) => {	 
	  res.render('index');
	
};

// Find a depart by Id
exports.findById = (req, res) => {	
	depart.findById(req.params.departId).then(depart => {
		res.send(depart);
	})
};
 
// Update a depart
exports.update = (req, res) => {
	const id = req.params.departId;
	depart.update( { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email }, 
		{ where: {id: req.params.departId} }
	).then(() => {
		res.status(200).send({ message: 'updated successfully a depart with id = ' + id });
	});
};
 
// Delete a depart by Id
exports.delete = (req, res) => {
	const id = req.params.departId;
	depart.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send({ message: 'deleted successfully a depart with id = ' + id });
	});
};