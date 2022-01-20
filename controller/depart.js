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

// exports.home = (req, res) => {	 
// 	  res.render('index');
	
// };

exports.update = (req, res) => {
	const id = req.body.id;
	console.log(req.body)
	depart.update( { ...req.body}, 
		{ where: {id: id} }
	).then(() => {
		res.redirect('/depart')
	});
};
 
// Delete a UserUser by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	depart.destroy( { where: { id: id }
	}).then(() => {	
		res.redirect('/depart')
	});
};
 

 
