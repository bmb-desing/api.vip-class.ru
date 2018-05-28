const event = require('./eventsSeed');
const news = require('./newsSeed');
const objects = require('./objectsSeed');
const construction = require('./constructionSeed')
const seed = {
	event: event,
	news: news,
	objects: objects,
	construction: construction
}
module.exports = seed