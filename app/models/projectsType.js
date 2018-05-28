module.exports = (sequelize, DataTypes) => {
	return sequelize.define('project', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			field: 'id',
		},
		name: {
			type: DataTypes.STRING,
			unique: true
		}

	})
}