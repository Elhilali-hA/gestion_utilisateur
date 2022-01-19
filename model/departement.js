module.exports = (sequelize, Sequelize) => {
	const depart = sequelize.define('departement', {
	  title: {
		type: Sequelize.STRING,
	  },
	  description: {
		type: Sequelize.STRING
	  },
	  
	});
	
 return depart
}