const event = require('./eventsSeed');
const news = require('./newsSeed');
const objects = require('./objectsSeed');
const construction = require('./constructionSeed')
const design = require('./designSeed')
const house = require('./houseSeed')
const seed = {
	event: event,
	news: news,
	objects: objects,
	construction: construction,
	design: design,
	house: house
}
module.exports = seed