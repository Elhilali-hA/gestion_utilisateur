module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		  },
	 firstname: {
		type: Sequelize.STRING,
	  },
	  lastname: {
		type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
	  },
	  depart_id: {
		type: Sequelize.INTEGER,
	},
	  password: {
		type: Sequelize.STRING
	  }
	});
	

}
