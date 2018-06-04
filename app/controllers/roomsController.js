const db = require('../models');

const roomsController = {
	getAll: function (req, res) {
		const type = req.query.type == 'commercial' ? 0 : 1
		db.house.findAll({
			attributes: {
				include: [[db.sequelize.literal('(SELECT COUNT(*) FROM rooms WHERE rooms.houseId = house.id AND rooms.price != 0)'), 'freeCount']]
			},
			include: {
				model: db.rooms,
				where: {
					type: type
				}
			}
		}).then(function (house) {
			getMaxArea(type, function (maxArea) {
				getMinArea(type, function (minArea) {
					getMinPrice(type, function(minPrice) {
						getMaxPrice(type, function (maxPrice) {
							res.json({
								house: house,
								setting: {
									maxArea: parseFloat(maxArea.toFixed(2)),
									minArea: parseFloat(minArea.toFixed(2)),
									maxPrice: maxPrice,
									minPrice: minPrice
								}
							})
						})
					})
				})
			})
		})
	},
	getRoom: function (req, res) {
		const room = req.params.room
		db.rooms.findOne({
			where: {
				id: room
			}
		}).then(function (room) {
			res.json(room)
		}).catch(function (err) {
			console.log(err)
			res.sendStatus(404)
		})
	}
}

function getMaxArea(type, callback) {
	db.rooms.max('area', {
		where: {
			free: 1,
			type: type
		}
	}).then(function (set) {
		callback(set)
	})
}
function getMinArea(type, callback) {
	db.rooms.min('area', {
		where: {
			free: 1,
			type: type
		}
	}).then(function (set) {
		callback(set)
	})
}
function getMinPrice(type, callback) {
	db.rooms.min('price', {
		where: {
			free: 1,
			type: type
		}
	}).then(function (set) {
		callback(set)
	})
}
function getMaxPrice(type, callback) {
	db.rooms.max('price', {
		where: {
			free: 1,
			type: type
		}
	}).then(function (set) {
		callback(set)
	})
}
module.exports = roomsController