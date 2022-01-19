module.exports = (sequelize, Sequelize) => {
	const depart = sequelize.define('departement', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },  
	  title: {
		type: Sequelize.STRING,
	  },
	  description: {
		type: Sequelize.STRING
	  },
	  
	});
	
 return depart
}