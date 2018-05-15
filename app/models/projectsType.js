module.exports = (sequelize, DataTypes) => {
	return sequelize.define('projectsType', {
		name: {
			type: DataTypes.STRING,
			unique: true
		}

	})
}