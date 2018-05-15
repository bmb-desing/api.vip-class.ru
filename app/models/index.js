const config = require('../../config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.database.db, config.database.user, config.database.password, {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})
const db = {
	Sequelize: Sequelize,
	sequelize: sequelize
}
db.events = sequelize.import('./events')
db.news = sequelize.import('./news')
db.house = sequelize.import('./houses')
db.rooms = sequelize.import('./rooms')
db.projects = sequelize.import('./projects')
db.projectsType = sequelize.import('./projectsType')
db.design = sequelize.import('./design')
db.objects = sequelize.import('./objects')
db.objectsImage = sequelize.import('./objectsImage')
db.objects.hasMany(db.objectsImage)
db.objectsImage.belongsTo(db.objects)
db.rooms.belongsTo(db.house)
db.house.hasMany(db.rooms)
db.projects.belongsTo(db.projectsType)
db.projectsType.hasMany(db.projects)
module.exports = db