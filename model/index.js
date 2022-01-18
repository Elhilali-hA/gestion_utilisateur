const User = require('./user')
const depart = require('./departement')


User.belongsTo(depart, {foreignKey: 'depart_id'})
depart.hasmany(User)