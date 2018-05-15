module.exports = (sequelize, DataTypes) => {
	return sequelize.define('house', {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		name_english: {
			type: DataTypes.STRING,
			unique: true
		},
		svgTemplate: DataTypes.TEXT,
		floorImg: DataTypes.STRING,
		comImage: DataTypes.STRING
	})
}