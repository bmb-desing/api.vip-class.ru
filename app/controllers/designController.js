const db = require('../models');
const designController = {
	get: function (req, res) {
		const skip = req.query.skip || 0
		db.design.findAndCountAll({
			limit: 4,
			offset: parseInt(skip)
		}).then(function (design) {
			res.json({design: design.rows, count: design.count})
		}).catch(function (err) {
			res.sendStatus(404)
			console.log(err)
		})
	}
}
module.exports = designController