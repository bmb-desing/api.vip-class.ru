module.exports = (sequelize, DataTypes) => {
	return sequelize.define('design', {
		name: {
			type: DataTypes.STRING,
		},
		image: DataTypes.STRING,
	})
}