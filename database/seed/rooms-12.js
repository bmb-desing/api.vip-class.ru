var roomArr = []
const rooms = [
	{
		numberRoom: '1',
		rooms: 2,
		image: '/img/object/rooms/72-1-right.png',
		area: 72.1,
		floor: 1,
		section: 1,
		svgTemplate: 'm 823.90028,7.470255 177.66852,-0.6022663 18.6703,16.2611893 v 71.067423 l 18.6702,-1.204533' +
		' 21.6816,20.477052 -1.2045,16.86346 v 78.89688 L 919.05836,208.6272 v -39.74958 l -82.51048,-3.01133 1.20453,-121.657791 h -13.85213 z',
	},
	{
		numberRoom: '2',
		rooms: 2,
		image: '/img/object/rooms/55-1-right.png',
		area: 55.1,
		section: 1,
		floor: 1,
		svgTemplate: 'm 1059.3864,209.22946 v 76.48782 l 0.6023,19.27252 -17.4658,16.26119 h -21.0793' +
		' v 73.47649 l -15.6589,13.85212 H 894.96771 V 258.6153 l -15.65893,-0.60227 0.60227,-51.7949 39.14731,2.40907 z',
	},
	{
		numberRoom: '3',
		rooms: 1,
		image: '/img/object/rooms/41-3-right.png',
		area: 41.3,
		floor: 1,
		section: 1,
		svgTemplate: 'm 879.91105,206.21813 -105.3966,0 1.8068,203.56601 118.64646,-1.20454 V 258.6153 l -15.65893,-0.60227 z',

	},
	{
		numberRoom: '4',
		rooms: 1,
		image: '/img/object/rooms/42-2-right.png',
		area: 42.2,
		section: 1,
		floor: 1,
		svgTemplate: 'm 774.51445,206.21813 -118.64646,0.60227 0.60226,202.96374 h 119.851 z',
	},
	{
		numberRoom: '5',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/46-7-right.png',
		area: 46.7,
		section: 1,
		svgTemplate: 'm 655.86799,206.8204 -125.27139,-0.60227 0.60227,203.56601 h 125.27138 z',
	},
	{
		numberRoom: '6',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/63-5-right.png',
		area: 63.5,
		section: 1,
		svgTemplate: 'm 531.80113,6.2657224 201.15694,-1.2045326 0.60227,40.9541072 -15.05666,0.602267 -0.60226,118.646456 -26.49972,0.60227 v 4.81813 h -62.03343 v 35.53371 H 530.5966 Z',
	},
	{
		numberRoom: '55',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/63-5-left.png',
		area: 63.5,
		section: 2,
		svgTemplate: 'm 434.83626,206.21813 -1.20453,-36.13598 -61.43116,0.60227 v -5.4204 H 345.09858 L 344.49632,46.617564 H 329.43966 L 328.83739,5.0611898 531.80113,6.2657224 530.5966,206.21813 Z',
	},
	{
		numberRoom: '56',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/46-7-left.png',
		area: 46.7,
		section: 2,
		svgTemplate: 'm 530.5966,206.21813 -124.66912,0.60227 v 204.16827 l 125.27139,-1.20453 z',
	},
	{
		numberRoom: '57',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-left.png',
		area: 46.7,
		section: 2,
		svgTemplate: 'M 405.92748,206.8204 H 287.28102 l -0.60227,202.36147 119.24873,1.8068 z',
	},
	{
		numberRoom: '58',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/41-3-left.png',
		area: 41.3,
		section: 2,
		svgTemplate: 'm 287.28102,206.8204 -107.2034,0.60226 0.60227,49.38584 -13.24986,-0.60227 -0.60227,152.97564 h 119.85099 z',
	},
	{
		numberRoom: '59',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/55-1-left.png',
		area: 55.1,
		section: 2,
		svgTemplate: 'm 180.07762,207.42266 -177.0662886,1.8068 v 95.76034 l 17.4657226,16.26119' +
		' 20.477054,1.8068 1.204532,70.46516 15.056657,16.26119 109.612463,-0.60227 0.60227,-152.97564 13.24986,0.60227 z',
	},
	{
		numberRoom: '60',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/72-2-left.png',
		area: 72.2,
		section: 2,
		svgTemplate: 'M 3.0113314,209.22946 V 114.67365 L 23.488385,92.992068 42.15864,92.389802' +
		' 40.954108,22.526912 60.226629,6.8679887 237.89518,7.470255 l 0.60227,37.34051 h -12.64759 l 0.60226,122.260055 -82.51048,1.8068 0.60227,38.54504 z'
	},
]
rooms.forEach(function (item) {
	for (var i = 1; i <= 10; i++) {
		var number = i != 10 ? parseInt(item.numberRoom) + (6 * (i - 1)) : parseInt(item.numberRoom) + (6 * (i - 2)) + 'a'
		var room = {
			numberRoom: number,
			floor: i,
			price: isFree(number) ? 76000 : 0,
			free: isFree(number),
			section: item.section,
			svgTemplate: item.svgTemplate,
			area: item.area,
			rooms: item.rooms,
			image: item.image
		}
		roomArr.push(room)
	}
})
function isFree(number) {
	const numbers = number + ''
	const arr = ['51a', '102', '105a']
	return arr.indexOf(numbers) != -1 ? 1 : 0

}
module.exports = roomArr