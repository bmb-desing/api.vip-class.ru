module.exports = (sequelize, DataTypes) => {
	return sequelize.define('news', {
		alias: {
			type: DataTypes.STRING,
			unique: true
		},
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		shortText: DataTypes.TEXT,
		text: DataTypes.TEXT,
		image: DataTypes.STRING,
		date: DataTypes.DATE
	})
}