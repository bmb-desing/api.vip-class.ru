const db = require('../models');
const newsController = {
	getAll: function (req, res) {
		db.news.getAll().then(function (news) {
			res.json(news)
		}).catch(function (err) {
			res.sendStatus(500)
			console.log(err)
		})
	},
	getForAlias: function (req, res) {
		db.news.findOne({
			where: {
				alias: req.params.news
			}
		}).then(function (news) {
			if (news) {
				res.json(news)
			}
			else {
				res.sendStatus(404)
			}
		}).catch(function (err) {
			res.sendStatus(500)
			console.log(err)
		})
	}
}
module.exports = newsController