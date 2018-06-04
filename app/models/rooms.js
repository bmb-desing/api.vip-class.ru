module.exports = (sequelize, DataTypes) => {
	return sequelize.define('rooms', {
		area: DataTypes.FLOAT,
		floor: DataTypes.INTEGER,
		section: DataTypes.INTEGER,
		price: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		numberRoom: DataTypes.STRING,
		rooms: DataTypes.INTEGER,
		free: {
			defaultValue: 0,
			type: DataTypes.BOOLEAN
		},
		image: DataTypes.STRING,
		svgTemplate: DataTypes.TEXT,
		type: {
			defaultValue: 1,
			type: DataTypes.BOOLEAN
		}
	},
	{
		hooks: {
			beforeCreate: (object, options) => {
				//console.log('Квартира:' + object.numberRoom + ' Копрус: ' + object.houseId)
			}
		}
	})
}