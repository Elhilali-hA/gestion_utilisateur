const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('../model/user')(sequelize, Sequelize);
db.depart = require('../model/departement')(sequelize, Sequelize);


db.depart.hasMany(db.users, {
  foreignKey: 'depart_id',
  as : 'users'  
});


db.users.belongsTo( db.depart, {
  foreignKey: 'depart_id',
  as : 'depart'
});




module.exports = db;