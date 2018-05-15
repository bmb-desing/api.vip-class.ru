module.exports = (sequelize, DataTypes) => {
	return sequelize.define('objectsImage', {
		description: {
			type: DataTypes.STRING
		},
		image: DataTypes.STRING
	})
}