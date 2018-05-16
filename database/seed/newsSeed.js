const db = require('../../app/models');


const newsSeed = db.news.findAll().then(function (event) {
	/*if (!event.length) {
		news.map(function (item) {
			db.news.create(item).then(function () {
				console.log('Новости успешно созданна')
			}).catch(function (err) {
				console.log(err)
			})
		})
	}*/
})
module.exports = newsSeed