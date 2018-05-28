const db = require('../models');
const projectsController = {
	getFirst: function (req, res) {
		db.projectsType.findAndCountAll({
			attributes: {
				include: [[db.sequelize.literal('(SELECT COUNT(*) FROM project_images WHERE project_images.projectId = project.id)'), 'imagesCount']]
			},
			include: {
				model: db.projects,
				limit: 4
			}
		}).then(function (projects) {
			res.json({projects: projects.rows, count: projects.count})
		}).catch(function (err) {
			res.sendStatus(404)
			console.log(err)
		})
	},
	getNewImages: function (req, res) {
		const limit = 4
		const id = req.query.id
		const offset = parseInt(req.query.skip)
		db.projects.findAll({
			limit: limit,
			offset: offset,
			where: {
				projectId: id,
			},
		}).then(function (result) {
			res.json(result)
		}).catch(function (err) {
			res.sendStatus(404)
			console.log(err)
		})
	}
}
module.exports = projectsController