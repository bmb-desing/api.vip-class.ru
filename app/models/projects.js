module.exports = (sequelize, DataTypes) => {
	return sequelize.define('project_images', {
		name: {
			type: DataTypes.STRING,
		},
		area: DataTypes.INTEGER,
		rooms: DataTypes.INTEGER,
		floors: DataTypes.INTEGER,
		price: DataTypes.INTEGER,
		description: DataTypes.TEXT,
		image: DataTypes.STRING
	})
}