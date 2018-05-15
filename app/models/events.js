module.exports = (sequelize, DataTypes) => {
	return sequelize.define('events', {
		alias: {
			type: DataTypes.STRING,
			unique: true
		},
		title: DataTypes.STRING,
		description: DataTypes.TEXT,
		text: DataTypes.TEXT,
		image: DataTypes.STRING,
		shortText: DataTypes.TEXT,
		link: DataTypes.TEXT,
	})
}