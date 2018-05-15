const db = require('../models')
const eventsController = {
	getAll: function (req, res) {
		db.events.findAll().then(function (events) {
			if(events.length) {
				res.json(events)
			}
			else {
				res.sendStatus(404)
			}
		}).catch(function (err) {
			res.sendStatus(500)
			console.log(err)
		})
	},
	getForAlias: function(req, res) {
		db.events.findOne({
			where: {
				alias : req.params.event
			}
		}).then(function (event) {
			if (event) {
				res.json(event)
			}
			else {
				res.sendStatus(404)
			}
		}).catch(function (err) {
			res.sendStatus(500)
			console.log(err)
		})
	},
	getForIndex: function (req, res) {
		db.events.findOne({
			orderBy: [['createdAt', 'DESC']]
		}).then(function (event) {
			res.json(event)
		}).catch(function (err) {
			res.sendStatus(500)
			console.log(err)
		})
	},
	getTwoEvents: function (req, res) {
		db.events.findAll({
			limit: 2
		}).then(function (events) {
			res.json(events)
		}).catch(function (err) {
			res.sendStatus(500)
			console.log(err)
		})
	},
	getTwoEventsForEvent: function(req, res) {
		db.events.findAll({
			where: {
				$not: {
					alias: req.params.event
				}
			},
			limit: 2
		}).then(function (events) {
			res.json(events)
		}).catch(function (err) {
			res.sendStatus(500)
			console.log(err)
		})
	}
}
module.exports = eventsController