const db = require('../models');
const constructionController = {
	getFirst: function (req, res) {
		db.objects.findAndCountAll({
			limit: 2,
			attributes: {
				include: [[db.sequelize.literal('(SELECT COUNT(*) FROM objects_images WHERE objects_images.objectId = objects.id)'), 'imagesCount']]
			},
			include: [
				{
					model: db.objectsImage,
					limit: 4,
				}
			],
		}).then(function (constructions) {
			res.json({objects: constructions.rows, count: constructions.count})
		}).catch(function (err) {
			res.sendStatus(404)
			console.log(err)
		})
	},
	getNewObjects: function (req, res) {
		db.objects.findAll({
			limit: 2,
			offset: parseInt(req.query.skip),
			attributes: {
				include: [[db.sequelize.literal('(SELECT COUNT(*) FROM objects_images WHERE objects_images.objectId = objects.id)'), 'imagesCount']]
			},
			include: [
				{
					model: db.objectsImage,
					limit: 4
				}
			],
		}).then(function (construc) {
			console.log(construc[0]);
			res.json(construc)
		}).catch(function (err) {
			res.sendStatus(404)
			console.log(err)
		})
	},
	getImagesForObject: function (req, res) {
		db.objectsImage.findAll({
			where: {
				objectId: req.query.id
			},
			limit: 4,
			offset: parseInt(req.query.skip)
		}).then(function (images) {
			res.json(images)
		}).catch(function (err) {
			res.sendStatus(404)
			console.log(err)
		})
	}
}
module.exports = constructionController