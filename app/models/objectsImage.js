module.exports = (sequelize, DataTypes) => {
	return sequelize.define('objects_images', {
		description: {
			type: DataTypes.STRING
		},
		image: DataTypes.STRING
	})
}