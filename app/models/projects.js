module.exports = (sequelize, DataTypes) => {
	return sequelize.define('projects', {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		area: DataTypes.INTEGER,
		rooms: DataTypes.INTEGER,
		floors: DataTypes.INTEGER,
		price: DataTypes.INTEGER,
		description: DataTypes.TEXT,
		image: DataTypes.STRING
	})
}