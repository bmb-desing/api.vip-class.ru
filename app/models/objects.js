module.exports = (sequelize, DataTypes) => {
	return sequelize.define('objects', {
		name: {
			type: DataTypes.STRING
		}
	})
}