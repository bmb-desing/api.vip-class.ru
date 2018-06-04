const db = require('../../app/models')
const houseTen = require('./rooms-10');
const houseTwenty = require('./rooms-12')
const houseThird = require('./house-13')
const houseNine = require('./house-9')
const seed = [
	{
		name: 'K-10',
		sectionCount: 2,
		svgTemplate: 'm 3432.3962,1625.2642 63.5095,-516.7359 34.6415,11.5472 80.8302,-14.434 83.7169,-57.7358' +
		' 86.6038,2.8868 129.9057,-49.0755 83.717,-54.84908 77.9434,5.77359 23.0943,-5.77359 2.8868,-37.5283 ' +
		'49.0755,25.98113 118.3584,17.32076 115.4717,83.71699 46.1887,25.9811 -20.2075,23.0944 -135.6793,493.6415 -560.0377,262.6981 -20.2076,8.6604 -268.4717,-199.1887 z',
		floorImg: '/img/object/house-2-section.png',
		rooms: houseTen,
	},
	{
		name: 'K-13',
		sectionCount: 2,
		floorImg: '/img/object/house-2-section.png',
		svgTemplate: 'm 1610.8302,687.0566 127.0189,-63.50943 129.9056,-8.66038 476.3208,202.07547 -25.9812,256.92454 -14.4339,-17.3208 -23.0944,2.8868' +
		' v 34.6415 l -92.3773,34.6415 -77.9434,2.8868 -46.1887,51.9623 -98.1509,40.4151 -8.6604,-17.3208 -31.7547,8.6604 -5.7736,25.9812 -49.0755,28.8679 -216.5094,-115.4717 z',
		rooms: houseThird
	},
	{
		name: 'Античная 26',
		svgTemplate: 'm 1348.1321,1804.2453 -441.67927,-366.6227 -83.71698,-461.88675 -25.98113,-11.54717 2.88679,-25.98113 178.98113,-83.71698 121.24526,-2.8868' +
		' 34.6415,-14.43396 v 25.98113 l 418.5849,245.37736 31.7548,-11.5472 14.4339,282.9057 -46.1887,23.0943 -11.5471,-23.0943 -20.2076,8.6604 34.6415,334.8679 z',
		sectionCount: 2,
		floorImg: '/img/object/house-2-section.png',
		rooms: houseTwenty
	},
	{
		svgTemplate: 'm 2344.0755,816.96226 -11.5472,-378.16981 -2.8868,-17.32075 40.4151,-8.66038 57.7359,-37.5283' +
		' 63.5094,2.88679 31.7547,-11.54717 v 17.32076 l 31.7547,17.32075 17.3208,-11.54717 h 34.6415 l 46.1887,31.75472' +
		' 11.5471,14.43396 106.8114,34.64151 23.0943,-11.54717 57.7358,2.88679 51.9623,40.4151 v 8.66037 l 60.6226,11.54717 11.5472,-14.43396' +
		' 23.0944,11.54717 -5.7736,17.32076 46.1887,17.32075 8.6603,-17.32075 57.7359,5.77358 75.0566,49.07547 v 5.77359 l 57.7358,17.32075 20.2076,-11.54717' +
		' 17.3207,2.8868 -5.7736,23.09433 40.4151,11.54717 106.8114,-5.77358 54.849,40.41509 2.8868,11.54717 161.6604,54.84906 5.7736,-14.43396 83.717,8.66038 77.9434,46.18867' +
		' 5.7735,11.54717 60.6227,28.86793 49.0755,-23.09434 -8.6604,49.07547 -14.434,8.66038 -17.3207,147.22644 -98.151,46.1887 -86.6038,-2.8868 -83.7169,57.7358 -80.8302,14.434' +
		' -34.6415,-11.5472 -28.868,219.3962 -629.3207,-262.6981 v -31.7547 l -121.2453,-75.05661 -98.1509,-31.75471 -23.0944,5.77358 -2.8868,23.09434 -248.2641,-138.56604',
		sectionCount: 5,
		floorImg: '/img/object/house-5-section.png',
		name: 'К-9',
		rooms: houseNine
	}
]
const houseSeed = db.house.findAll().then(function (house) {
	if (!house.length) {
		seed.map(function (houses) {
			db.house.create(houses).then(function (status) {
				houses.rooms.map(function (room) {
					room.houseId = status.id
					db.rooms.create(room)
				})
			})
		})
	}
})
module.exports = houseSeed