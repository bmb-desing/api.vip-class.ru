var roomArr = []
const rooms = [
	{
		numberRoom: '1',
		rooms: 2,
		image: '/img/object/rooms/72-1-right.png',
		area: 72.9,
		floor: 1,
		section: 5,
		svgTemplate: 'm 2298.2413,10.421682 h 183.285 l 16.8926,16.047992' +
		' v 73.48291 h 16.8926 l 17.7373,17.737256 -0.8446,92.90942 -133.4518,-0.84463 -0.8446,-37.16377 -85.3077,-2.53389 V 50.119346 l -13.5141,-2.533893 z',
	},
	{
		numberRoom: '2',
		rooms: 2,
		image: '/img/object/rooms/55-1-right.png',
		area: 55.8,
		section: 5,
		floor: 1,
		svgTemplate: 'm 2532.2042,210.59926 3.3785,92.90943 -18.5819,21.11578' +
		' -19.4265,-0.84463 1.6893,71.79364 -15.2034,14.35873 -112.3359,0.84463 0.8446,-149.49971 -11.8249,-0.84463 v -52.36713 l 38.0084,1.68926 z',
	},
	{
		numberRoom: '3',
		rooms: 1,
		image: '/img/object/rooms/41-3-right.png',
		area: 42.5,
		floor: 1,
		section: 5,
		svgTemplate: 'm 2360.744,208.06537 -104.7342,1.68926 v 202.71148 l 115.7145,-1.68927 0.8446,-149.49971 -11.8249,-0.84463 z',

	},
	{
		numberRoom: '4',
		rooms: 1,
		image: '/img/object/rooms/46-7-left.png',
		area: 44.0,
		section: 5,
		floor: 1,
		svgTemplate: 'm 2256.0098,209.75463 h -119.9376 l 0.8446,201.86685 119.093,0.84463 z',
	},
	{
		numberRoom: '5',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/46-7-right.png',
		area: 48.4,
		section: 5,
		svgTemplate: 'm 2136.0722,209.75463 h -126.6947 v 201.86685 h 127.5393 z',
	},
	{
		numberRoom: '6',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/63-5-right.png',
		area: 64.7,
		section: 5,
		svgTemplate: 'm 2009.3775,209.75463 -0.8446,-201.02221 203.5561,-2.5338934 1.6892,43.9208194 h -19.4265 l 4.2232,122.471514 -87.8417,2.5339 v 30.40672 4.22315 z',
	},
	{
		numberRoom: '55',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/63-5-left.png',
		area: 64.7,
		section: 4,
		svgTemplate: 'm 2008.5329,8.73242 -202.7115,-2.5338934 1.6892,39.6976634 16.048,6.757049 -0.8446,117.403731 82.7739,3.37852 0.8446,34.62988 103.045,1.68926 z',
	},
	{
		numberRoom: '56',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/46-7-left.png',
		area: 48.4,
		section: 4,
		svgTemplate: 'm 2009.3775,209.75463 -128.3839,-0.84463 2.5338,203.55611 125.8501,-0.84463 z',
	},
	{
		numberRoom: '57',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-left.png',
		area: 44.0,
		section: 4,
		svgTemplate: 'm 1880.9936,208.91 -117.4038,1.68926 0.8447,201.86685 h 119.0929 z',
	},
	{
		numberRoom: '58',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/41-3-right.png',
		area: 43.8,
		section: 4,
		svgTemplate: 'm 1763.5898,210.59926 -117.4037,-0.84463 0.8446,202.71148 h 117.4038 z',
	},
	{
		numberRoom: '59',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/55-1-left.png',
		area: 47.9,
		section: 4,
		svgTemplate: 'm 1646.1861,209.75463 -127.5393,1.68926 0.8446,183.28496 19.4265,19.42652 108.1128,-1.68926 z',
	},
	{
		numberRoom: '60',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/72-2-left.png',
		area: 64.0,
		section: 4,
		svgTemplate: 'm 1518.6468,211.44389 0.8446,-184.974216 18.5819,-17.737254 182.4403,-1.6892623 1.6893,41.3869263 h -16.048 l 1.6893,123.316146 -86.997,2.53389 V 208.91 Z'
	},
	{
		numberRoom: '109',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/72-2-left.png',
		area: 62.1,
		section: 3,
		svgTemplate: 'M 1519.4914,26.469674 1500.0649,7.8877889 1318.4692,8.73242 l 0.8446,32.940615 10.9803,7.60168 -1.6893,121.626885 48.9886,0.84463 38.0084,-0.84463 0.8446,39.69766 102.2004,0.84463 z'
	},
	{
		numberRoom: '110',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/72-2-left.png',
		area: 46.7,
		section: 3,
		svgTemplate: 'm 1518.6468,211.44389 0.8446,183.28496 -16.048,16.89263 -114.8698,0.84463 -0.8446,-201.86685 h 28.7174 z'
	},
	{
		numberRoom: '111',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-left.png',
		area: 42.9,
		section: 3,
		svgTemplate: 'm 1387.729,210.59926 -119.9377,-0.84463 2.5339,201.86685 118.2484,0.84463 z'
	},
	{
		numberRoom: '112',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-right.png',
		area: 43.7,
		section: 3,
		svgTemplate: 'm 1267.7913,209.75463 -114.8698,-1.68926 -1.6893,204.40074 119.093,-0.84463 z'
	},
	{
		numberRoom: '113',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-left.png',
		area: 46.7,
		section: 3,
		svgTemplate: 'm 1152.9215,208.06537 -133.4517,2.53389 -1.6893,182.44033 20.2712,21.11578 113.1805,-1.68926 z'
	},
	{
		numberRoom: '114',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/42-2-left.png',
		area: 62.1,
		section: 3,
		svgTemplate: 'M 1019.4698,210.59926 1017.7805,25.625043 1037.207,6.1985266 1220.492,7.0431577 V 43.362297 l -10.9802,5.912418 2.5339,118.248355 -89.5309,5.06779 0.8446,36.31914 z'
	},
	{
		numberRoom: '163',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/42-2-left.png',
		area: 59.9,
		section: 2,
		svgTemplate: 'M 1017.7805,25.625043 1000.0433,7.8877889 814.22442,6.1985266 l 0.84463,41.3869264 17.73726,4.223155 -3.37853,119.092992 87.84164,2.53389 v 38.0084 l 102.20038,-0.84463 z'
	},
	{
		numberRoom: '164',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-left.png',
		area: 47.2,
		section: 2,
		svgTemplate: 'm 1019.4698,210.59926 -131.76247,-0.84463 0.84463,201.86685 111.49134,1.68926 17.7372,-20.27115 z'
	},
	{
		numberRoom: '165',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-left.png',
		area: 40.9,
		section: 2,
		svgTemplate: 'm 887.70733,209.75463 h -114.0252 l -0.84463,203.55611 115.71446,-1.68926 z'
	},
	{
		numberRoom: '166',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-right.png',
		area: 41.7,
		section: 2,
		svgTemplate: 'M 773.68213,209.75463 654.58914,208.91 l -0.84464,205.24537 119.093,-0.84463 z'
	},
	{
		numberRoom: '167',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/46-7-right.png',
		area: 46.5,
		section: 2,
		svgTemplate: 'm 654.58914,208.91 -128.38394,0.84463 1.68926,201.86685 125.85004,2.53389 z'
	},
	{
		numberRoom: '168',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/63-5-right.png',
		area: 60,
		section: 2,
		svgTemplate: 'M 526.2052,209.75463 527.04983,6.1985266 654.58914,8.73242' +
		' l 71.79364,-0.8446311 0.84463,41.3869261 -16.04799,2.533893 2.5339,119.092992 -85.30775,2.53389 v 34.62988 z'
	},
	{
		numberRoom: '217',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/63-5-left.png',
		area: 60,
		section: 1,
		svgTemplate: 'M 527.04983,6.1985266 H 324.33836 V 47.585453 l 19.42652,4.223155 -4.22316,117.403732 84.46311,5.91242 3.37853,35.4745 98.82184,-0.84463 z'
	},
	{
		numberRoom: '218',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/46-7-left.png',
		area: 46.5,
		section: 1,
		svgTemplate: 'm 526.2052,209.75463 -129.22856,0.84463 4.22315,202.71148 126.69467,-1.68926 z'
	},
	{
		numberRoom: '219',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-left.png',
		area: 41.7,
		section: 1,
		svgTemplate: 'm 396.97664,210.59926 -118.24836,0.84463 3.37852,201.02222 119.09299,0.84463 z'
	},
	{
		numberRoom: '220',
		floor: 1,
		rooms: 1,
		image: '/img/object/rooms/42-2-right.png',
		area: 40.9,
		section: 1,
		svgTemplate: 'm 278.72828,211.44389 -102.20037,-0.84463 2.53389,48.98861 -15.20336,0.84463 1.68926,152.87824 116.5591,-0.84463 z'
	},
	{
		numberRoom: '221',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/55-1-left.png',
		area: 54,
		section: 1,
		svgTemplate: 'M 176.52791,210.59926 3.3785246,209.75463' +
		' v 97.97721 l 15.2033604,15.20337 20.271148,1.68926 v 68.41512 l 16.892622,18.58189 109.802045,1.68926 -1.68926,-152.87824 15.20336,-0.84463 z'
	},
	{
		numberRoom: '222',
		floor: 1,
		rooms: 2,
		image: '/img/object/rooms/72-1-left.png',
		area: 69.2,
		section: 1,
		svgTemplate: 'M 3.3785246,209.75463 2.5338934,116.84521 20.271147,98.263321 37.16377,97.41869 38.008401,26.469674 51.5225,12.955576 237.34135,9.5770512 V 48.430084 l -15.20336,1.689262 0.84463,119.092994 -84.46311,4.22315 v 37.16377 z'
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
	const arr = ['217', '219', '267', '267a', '268', '268a', '168', '214a', '212a', '213a', '215a', '94', '106', '107', '106a', '52', '51', '53a', '52a', '51a']
	return arr.indexOf(numbers) != -1 ? 1 : 0

}
module.exports = roomArr