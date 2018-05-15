const db = require('../../app/models')
const events = [
	{
		title: 'Квартиры в Военную ипотеку',
		alias: 'kvartiry-v-voennuyu-ipoteku',
		shortText: 'Уважаемые покупатели, военнослужащие Российской Федерации! Приобретайте квартиры в ЖК «Жемчужина Севастополя» в Военную ипотеку! Для подробного ознакомления перейдите по ссылке.',
		description: 'Приобретение квартиры в ЖК «Жемчужина Севастополя» с помощью Военной ипотеки',
		image: '/img/event-1.jpg',
		link: 'Преобретите квартиру с помощью <b>Военной ипотеки</b>',
		text: 'Уважаемые покупатели, военнослужащие Российской Федерации! Приобретайте квартиры в ЖК «Жемчужина Севастополя» в Военную ипотеку!'
	},
	{
		title: 'Покупка квартиры с привлечением маткапитала',
		alias: 'pokupka-kvartiry-s-privlecheniem-matkapitala',
		shortText: 'Компания «VIP CLASS» с готовностью принимает материнский капитал.',
		description: 'Приобретение квартиры в ЖК «Жемчужина Севастополя» с привлечением маткапитала',
		image: '/img/event-2.jpg',
		link: 'Преобретите квартиру с <b>привлечением маткапитала</b>',
		text: 'Компания «VIP CLASS» с готовностью принимает материнский капитал.'
	}
]
const eventsSeed = db.events.findAll().then(function (event) {
	if (!event.length) {
		events.map(function (item) {
			db.events.create(item).then(function () {
				console.log('Акция успешно созданна')
			}).catch(function (err) {
				console.log(err)
			})
		})
	}
})
module.exports = eventsSeed