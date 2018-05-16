const db = require('../../app/models');
const objects = [
	{
		name: 'Многоквартирный жилой дом по ул. Партизанская.',
		path: 'mnogokvartirnyj-zhiloj-dom-po-ul-partizanskaya',
		image: [
			'str_571', 'str_572', 'str_573', 'str_574'
		]
	},
	{
		name: 'Автосалон по ул. Городское шоссе, 3.',
		path: 'avtosalon-po-ul-gorodskoe-shosse-3',
		image: [
			'str_566', 'str_567', 'str_568'
		]
	},
	{
		name: 'Торговый комплекс по ул. А.Кесаева, 14-Г.',
		path: 'torgovyj-kompleks-po-ul-akesaeva-14-g',
		image: [
			'str_542', 'str_543', 'str_544', 'str_545'
		]
	},
	{
		name: 'Торговый комплекс по ул. Столетовский проспект, 69.',
		path: 'torgovyj-kompleks-po-ul-stoletovskij-prospekt',
		image: [
			'str_534', 'str_535', 'str_536', 'str_537', 'str_538', 'str_539', 'str_540', 'str_541'
		]
	},
	{
		name: 'Торговый комплекс на автомобильном рынке "Фиолентовский".',
		path: 'torgovyj-kompleks-na-avtomobilnom-rynke',
		image: [
			'str_115', 'str_117'
		]
	},
	{
		name: 'Строительство базы рыбаков-любителей, находящихся на причале в б. Казачья.',
		path: 'stroitelstvo-bazy-rybakov-lyubitelej',
		image: [
			'str_107', 'str_109', 'str_111', 'str_113'
		]
	},
	{
		name: 'Магазин "Злато" получил дополнительные производственные площади в виде двухэтажной пристройки.',
		path: 'magazin-zlato',
		image: [
			'str_101', 'str_103', 'str_105'
		]
	},
	{
		name: 'Двухэтажный остановочный павильон по ул. Фадеева в г. Севастополе.',
		path: 'dvuhetazhnyj-ostanovochnyj-pavilon-po-ul-fadeev',
		image: [
			'str_93', 'str_95', 'str_97', 'str_99'
		]
	},
	{
		name: 'База Олимпийского резерва в яхт-клубе "Юг" на берегу живописной бухты Омега в г. Севастополе.',
		path: 'baza-olimpijskogo-rezerva-v-yaht-klube-yug',
		image: [
			'str_85', 'str_87', 'str_89', 'str_91'
		]
	},
	{
		name: 'Двухэтажный индивидуальный жилой дом по ул. Щорса 15-А (возле стадиона "ЧАЙКА").',
		path: 'dvuhetazhnyj-individualnyj-zhiloj-dom-chajka',
		image: [
			'str_79', 'str_81', 'str_83'
		]
	},
	{
		name: 'Туристическая база отдыха "Романтик - 2" в п. Кача',
		path: 'turisticheskaya-baza-otdyha-romantik-2-v-p-kacha',
		image: [
			'str_160', 'str_163', 'str_167'
		]
	},
	{
		name: 'Cтроительство двухэтажного с цокольным и мансардным этажами индивидуального жилого дома в с/т "Пилот", что в б. Казачья',
		path: 'ctroitelstvo-dvuhetazhnogo-s-tsokolnym',
		image: [
			'str_69', 'str_71', 'str_73'
		]
	},
	{
		name: 'Строительство выставочно-торгового комплекса в балке Стрелецкой',
		path: 'vistavochniy-komplecs-v-streleskoy-balke',
		image: [
			'str_61', 'str_63', 'str_65', 'str_67'
		]
	},
	{
		name: 'Кофейня "Шоколадница" в гостинице Севастополь.',
		path: 'kofeinya-shokoladnica',
		image: [
			'str_313', 'str_314', 'str_315', 'str_317'
		]
	},
	{
		name: 'Многоквартирный жилой дом в г. Севастополе по пр. Античный.',
		path: 'mnogokrartirniy-dom-antichniy',
		image: [
			'str_656', 'str_657', 'str_658', 'str_659', 'str_666', 'str_667', 'str_668', 'str_669', 'str_670', 'str_671', 'str_672', 'str_673', 'str_674', 'str_675', 'str_676'
		]
	}
]
const objectsSeed = db.objects.findAll().then(function (object) {
	if (!object.length) {
		objects.map(function (item) {
			db.objects.create({
				name: item.name
			}).then(function (newObject) {
				item.image.map(function (value) {
					db.objectsImage.create({
						description: newObject.name,
						objectId: newObject.id,
						image: '/img/stroitelstvo/' + item.path + '/' + value + '.jpg'
					}).then(function () {
						console.log('Обьект успешно добавлен')
					})
				})
			})
		})
	}
})