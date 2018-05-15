module.exports = (sequelize, DataTypes) => {
	return sequelize.define('rooms', {
		area: DataTypes.INTEGER,
		floor: DataTypes.INTEGER,
		section: DataTypes.INTEGER,
		price: DataTypes.INTEGER,
		numberRoom: DataTypes.INTEGER,
		rooms: DataTypes.INTEGER,
		buy: {
			defaultValue: 1,
			type: DataTypes.BOOLEAN
		},
		image: DataTypes.STRING,
		svgTemplate: DataTypes.TEXT,
		type: {
			defaultValue: 0,
			type: DataTypes.BOOLEAN
		}
	})
}