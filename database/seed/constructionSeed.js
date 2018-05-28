const db = require('../../app/models');
const seed = [
	{
		name: 'Наши бюджетные проекты:',
		image: '/budgetary',
		projects: [
			{
				name: 'Строительство ИВС в г. Донской Тульской области',
				image: 'stroitelstvo-ivs-v-g-donskoj-tulskoj-oblasti/1'
			},
			{
				name: 'Строительство ИВС в г. Донской Тульской области',
				image: 'stroitelstvo-ivs-v-g-donskoj-tulskoj-oblasti/2'
			},
			{
				name: 'Строительство детского сада на 200 мест в с. Кичменгский Городок Вологодской области',
				image: 'stroitelstvo-detskogo-sada-na-200-mest-v-s-kichmengskij-gorodok-vologodsoj-oblasti/1'
			},
			{
				name: 'Строительство детского сада на 200 мест в с. Кичменгский Городок Вологодской области',
				image: 'stroitelstvo-detskogo-sada-na-200-mest-v-s-kichmengskij-gorodok-vologodsoj-oblasti/2'
			},
			{
				name: 'Общежитие КНИТУ-КАИ в г. Казань',
				image: 'obschezhitie-knitu-kai-v-g-kazan/1'
			},
			{
				name: 'Общежитие КНИТУ-КАИ в г. Казань',
				image: 'obschezhitie-knitu-kai-v-g-kazan/2'
			}
		]
	},
	{
		name: 'Наши коммерческие проекты:',
		image: '/comercical',
		projects: [
			{
				name: 'Жилые многоквартирные дома по пр. Античному, 64.',
				image: 'zhilye-mnogokvartirnye-doma-po-pr-antichnomu-64/1'
			},
			{
				name: 'Жилые многоквартирные дома по пр. Античному, 64.',
				image: 'zhilye-mnogokvartirnye-doma-po-pr-antichnomu-64/2'
			},
			{
				name: 'Жилые многоквартирные дома по пр. Античному, 64.',
				image: 'zhilye-mnogokvartirnye-doma-po-pr-antichnomu-64/3'
			},
			{
				name: 'Жилые многоквартирные дома по пр. Античному, 64.',
				image: 'zhilye-mnogokvartirnye-doma-po-pr-antichnomu-64/4'
			},
			{
				name: 'Жилой комплекс с объектами соцкультбыта по ул. Колобова, 35.',
				image: 'zhiloj-kompleks-s-obektami-sotskultbyta-po-ul-kolobova-35/1'
			},
			{
				name: 'Жилой комплекс с объектами соцкультбыта по ул. Колобова, 35.',
				image: 'zhiloj-kompleks-s-obektami-sotskultbyta-po-ul-kolobova-35/2'
			},
			{
				name: 'Жилой комплекс с объектами соцкультбыта по ул. Колобова, 35.',
				image: 'zhiloj-kompleks-s-obektami-sotskultbyta-po-ul-kolobova-35/3'
			},
			{
				name: 'Жилой комплекс с объектами соцкультбыта по ул. Колобова, 35.',
				image: 'zhiloj-kompleks-s-obektami-sotskultbyta-po-ul-kolobova-35/4'
			},
			{
				name: 'Жилой комплекс с медицинским центром по ул. Шевченко',
				image: 'zhiloj-kompleks-s-meditsinskim-tsentrom-po-ul-shevchenko/1'
			},
			{
				name: 'Жилой комплекс с медицинским центром по ул. Шевченко',
				image: 'zhiloj-kompleks-s-meditsinskim-tsentrom-po-ul-shevchenko/1'
			},
			{
				name: 'Жилой комплекс по пр. Античный',
				image: 'zhiloj-kompleks-po-pr-antichnyj/1'
			},
			{
				name: 'Жилой комплекс  на Ул. Острякова',
				image: 'zhiloj-kompleks-na-ul-ostryakova/1'
			},
			{
				name: 'Жилой комплекс на ул. Колобова, 22',
				image: 'zhiloj-kompleks-na-ul-kolobova-22/1'
			},
			{
				name: 'Жилой комплекс на ул. Хрусталёва-Острякова',
				image: 'zhiloj-kompleks-na-ul-hrustalyova-ostryakova/1'
			},
			{
				name: 'Жилой дом по ул. Горького, 2',
				image: 'zhiloj-dom-po-ul-gorkogo-2/1'
			},
			{
				name: 'Жилой дом пл. 40-летия Октября',
				image: 'zhiloj-dom-pl-40-letiya-oktyabrya/1'
			},
			{
				name: 'Застройка участка для ведения крестьянского хозяйства в г. Алуште с. Семидворье',
				image: 'zastrojka-uchastka-dlya-vedeniya-krestyanskogo-hozyajstva-v-g-alushte-s-semidvore/1'
			},
			{
				name: 'Вещевой рынок \'Фиолентовский\' по фиолентовскому шоссе в г. Севастополе',
				image: 'veschevoj-rynok-fiolentovskij-po-fiolentovskomu-shosse-v-g-sevastopole/1'
			},
			{
				name: 'Усадебный дом в г. Алуште',
				image: 'usadebnyj-dom-v-g-alushte/1'
			},
			{
				name: 'Торговый центр на пр. Победы',
				image: 'torgovyj-tsentr-na-pr-pobedy/1'
			},
			{
				name: 'Торговый центр \'Мебельный Технологии\'',
				image: 'torgovyj-tsentr-mebelnyj-tehnologii/1'
			},
			{
				name: 'Торгово-офисные помещения на ул. Борисова',
				image: 'torgovo-ofisnye-pomescheniya-na-ul-borisova/1'
			},
			{
				name: 'Торговое здание \'Сабира\' по ул. Правды',
				image: 'torgovoe-zdanie-sabira-po-ul-pravdy/1'
			},
			{
				name: 'Техно-торговый центр по ул. Хрусталёва 35-Г',
				image: 'tehno-torgovyj-tsentr-po-ul-hrustalyova-35-g/1'
			},
			{
				name: 'Торговый центр \'Мебельный Технологии\'',
				image: 'tehno-torgovyj-tsentr-mebelnye-tehnologii/1'
			},
			{
				name: 'Строительство многоэтажных жилых домов по ул. Колобова в г. Севастополе',
				image: 'stroitelstvo-mnogoetazhnyh-zhilyh-domov-po-ul-kolobova-v-g-sevastopole/1'
			},
			{
				name: 'Строительство магазина по ул. Кесаева',
				image: 'stroitelstvo-magazina-po-ul-kesaeva/1'
			},
			{
				name: 'Строительство индивидуального жилого дома по ул. Парковой в г. Севастополе',
				image: 'stroitelstvo-individualnogo-zhilogo-doma-po-ul-parkovoj-v-g-sevastopole/1'
			},
			{
				name: 'Строительство индивидуального жилого дома по ул. Олимпийской в г. Севастополе',
				image: 'stroitelstvo-individualnogo-zhilogo-doma-po-ul-olimpijskoj-v-g-sevastopole/1'
			},
			{
				name: 'Строительство автосервиса с автосалоном по Балаклавскому шоссе в г. Севастополе',
				image: 'stroitelstvo-avtoservisa-s-avtosalonom-po-balaklavskomu-shosse-v-g-sevastopole/1'
			},
			{
				name: 'Склад по Камышовому шоссе в г. Севастополе',
				image: 'sklad-po-kamyshovomu-shosse-v-g-sevastopole/1'
			},
			{
				name: 'Садовый дом в ст. Пилот',
				image: 'sadovyj-dom-v-st-pilot/1'
			},
			{
				name: 'Рынок \'Мельница\' на ул. Индустриальной',
				image: 'rynok-melnitsa-na-ul-industrialnoj/1'
			},
			{
				name: 'Ресторан на Камышовом шоссе',
				image: 'restoran-na-kamyshovom-shosse/1'
			},
			{
				name: 'Реконструкция боксов хоз-бытового назначения',
				image: 'rekonstruktsiya-boksov-hoz-bytovogo-naznacheniya-s-pomescheniyami-dlya-otdyha-i-beregoukrepitelnymi-sooruzheniyami-po-ul-letchikov-v-g-sevastopole/1'
			},
			{
				name: 'Придорожное кафе на Ялтинской трассе',
				image: 'pridorozhnoe-kafe-na-yaltinskoj-trasse/1'
			},
			{
				name: 'Пансионат коттеджного типа в бухте Круглой',
				image: 'pansionat-kottedzhnogo-tipa-v-buhte-krugloj/1'
			},
			{
				name: 'Оздоровительный центр в парке Победы',
				image: 'ozdorovitelnyj-tsentr-v-parke-pobedy/1'
			},
			{
				name: 'Многоквартирный жилой комплекс по ул. Маринеско в г. Севастополе',
				image: 'mnogokvartirnyj-zhiloj-kompleks-po-ul-marinesko-v-g-sevastopole/1'
			},
			{
				name: 'Многоквартирный жилой комплекс по ул. Маринеско, 1-А.',
				image: 'mnogokvartirnyj-zhiloj-kompleks-po-ul-marinesko-1-a/1'
			},
			{
				name: 'Многоквартирный жилой комплекс по ул. Маринеско, 1-А.',
				image: 'mnogokvartirnyj-zhiloj-kompleks-po-ul-marinesko-1-a/2'
			},
			{
				name: 'Многоквартирный жилой комплекс по ул. Маринеско, 1-А.',
				image: 'mnogokvartirnyj-zhiloj-kompleks-po-ul-marinesko-1-a/3'
			},
			{
				name: 'Многоквартирный жилой комплекс по ул. Маринеско, 1-А.',
				image: 'mnogokvartirnyj-zhiloj-kompleks-po-ul-marinesko-1-a/4'
			},
			{
				name: 'Многоквартирный жилой комплекс по ул. Ген. Острякова в г. Севастополе',
				image: 'mnogokvartirnyj-zhiloj-kompleks-po-ul-gen-ostryakova-v-g-sevastopole/1'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Степаняна в г. Севастополе',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-stepanyana-v-g-sevastopole/1'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Степаняна, 9а.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-stepanyana-9a/1'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Степаняна, 9а.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-stepanyana-9a/2'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Степаняна, 9а.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-stepanyana-9a/3'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Степаняна, 9а.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-stepanyana-9a/4'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Партизанская.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-partizanskaya/1'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Партизанская.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-partizanskaya/2'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Партизанская.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-partizanskaya/3'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Партизанская.',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-partizanskaya/4'
			},
			{
				name: 'Многоквартирный жилой дом по ул. Новороссийской',
				image: 'mnogokvartirnyj-zhiloj-dom-po-ul-novorossijskoj/1'
			},
			{
				name: 'Многоквартирные жилые дома по ул. Острякова.',
				image: 'mnogokvartirnye-zhilye-doma-po-ul-ostryakova/1'
			},
			{
				name: 'Многоквартирные жилые дома по ул. Острякова.',
				image: 'mnogokvartirnye-zhilye-doma-po-ul-ostryakova/2'
			},
			{
				name: 'Многоэтажные гаражи на Радиогорке в г. Севастополе',
				image: 'mnogoetazhnye-garazhi-na-radiogorke-v-g-sevastopole/1'
			},
			{
				name: 'Многоэтажная застройка участка по ул. Руднево-Тульской в г. Севастополе',
				image: 'mnogoetazhnaya-zastrojka-uchastka-po-ul-rudnevo-tulskoj-v-g-sevastopole/1'
			},
			{
				name: 'Микрорайон по ул. Маринеско',
				image: 'mikrorajon-po-ul-marinesko/1'
			},
			{
				name: 'Культурно-торговый центр \'Колизей\' на проспекте Октябрьской революции',
				image: 'kulturno-torgovyj-tsentr-kolizej-na-prospekte-oktyabrskoj-revolyutsii/1'
			},
			{
				name: 'Коттеджные домики в б.Омега',
				image: 'kottedzhnye-domiki-v-bomega/1'
			},
			{
				name: 'Коттеджи в бухте Круглой',
				image: 'kottedzhi-v-buhte-krugloj/1'
			},
			{
				name: 'Комплекс общественного питания и торговли на ул. Кесаева',
				image: 'kompleks-obschestvennogo-pitaniya-i-torgovli-na-ul-kesaeva/1'
			},
			{
				name: 'Комплекс многоэтажных жилых домов со встроенными помещениями соцкультбыта по ул. Колобова, 22.',
				image: 'kompleks-mnogoetazhnyh-zhilyh-domov-so-vstroennymi-pomescheniyami-sotskultbyta-po-ul-kolobova-22/1'
			},
			{
				name: 'Комплекс многоэтажных жилых домов со встроенными помещениями соцкультбыта по ул. Колобова, 22.',
				image: 'kompleks-mnogoetazhnyh-zhilyh-domov-so-vstroennymi-pomescheniyami-sotskultbyta-po-ul-kolobova-22/2'
			},
			{
				name: 'Комплекс многоэтажных жилых домов со встроенными помещениями соцкультбыта по ул. Колобова, 22.',
				image: 'kompleks-mnogoetazhnyh-zhilyh-domov-so-vstroennymi-pomescheniyami-sotskultbyta-po-ul-kolobova-22/3'
			},
			{
				name: 'Комплекс многоэтажных жилых домов со встроенными помещениями соцкультбыта по ул. Колобова, 22.',
				image: 'kompleks-mnogoetazhnyh-zhilyh-domov-so-vstroennymi-pomescheniyami-sotskultbyta-po-ul-kolobova-22/4'
			},
			{
				name: 'Индивидуальный жилой дом в районе 5-ого км',
				image: 'individualnyj-zhiloj-dom-v-rajone-5-ogo-km/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул. Шукшина в г. Севастополе',
				image: 'individualnyj-zhiloj-dom-po-ul-shukshina-v-g-sevastopole/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул. Проезд Коробкова в г. Севастополе',
				image: 'individualnyj-zhiloj-dom-po-ul-proezd-korobkova-v-g-sevastopole/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул. Нагорная, в с. Передовое',
				image: 'individualnyj-zhiloj-dom-po-ul-nagornaya-v-s-peredovoe/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул. Леси Украинки в г. Севастополе',
				image: 'individualnyj-zhiloj-dom-po-ul-lesi-ukrainki-v-g-sevastopole/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул. Э. Асадова',
				image: 'individualnyj-zhiloj-dom-po-ul-e-asadova/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул. Древняя, в г. Севастополе',
				image: 'individualnyj-zhiloj-dom-po-ul-drevnyaya-v-g-sevastopole-2/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул. Древняя, в г. Севастополе',
				image: 'individualnyj-zhiloj-dom-po-ul-drevnyaya-v-g-sevastopole/1'
			},
			{
				name: 'Индивидуальный жилой дом по ул.3-й Готский проезд',
				image: 'individualnyj-zhiloj-dom-po-ul3-j-gotskij-proezd/1'
			},
			{
				name: 'Индивидуальный жилой дом на ул. Пластунская',
				image: 'individualnyj-zhiloj-dom-na-ul-plastunskaya/1'
			},
			{
				name: 'Гостиничный комплекс в парке Победы',
				image: 'gostinichnyj-kompleks-v-parke-pobedy/1'
			},
			{
				name: 'Гостиничные домики на пр. Октябрьской Революции',
				image: 'gostinichnye-domiki-na-pr-oktyabrskoj-revolyutsii/1'
			},
			{
				name: 'Деревянный домик в Бахчисарае',
				image: 'derevyannyj-domik-v-bahchisarae/1'
			},
			{
				name: 'Дачный кооператив в урочище Ласпи',
				image: 'dachnyj-kooperativ-v-urochische-laspi/1'
			},
			{
				name: 'Берегоукрепительные сооружения в п. Кача',
				image: 'beregoukrepitelnye-sooruzheniya-v-p-kacha/1'
			},
			{
				name: 'Автостоянка-кемпинг по Столетовскому проспекту',
				image: 'avtostoyanka-kemping-po-stoletovskomu-prospektu/1'
			},
			{
				name: 'Автосалон по ул. Городское шоссе, 3.',
				image: 'avtosalon-po-ul-gorodskoe-shosse-3/1'
			},
			{
				name: 'Автосалон по ул. Городское шоссе, 3.',
				image: 'avtosalon-po-ul-gorodskoe-shosse-3/2'
			},
			{
				name: 'Автосалон по ул. Городское шоссе, 3.',
				image: 'avtosalon-po-ul-gorodskoe-shosse-3/3'
			},
		]
	}
]
const constructionSeed = db.projectsType.findAll().then(function (construction) {
	if (!construction.length) {
		seed.map(function (item) {
			db.projectsType.create({
				name: item.name
			}).then(function (newConst) {
				item.projects.map(function (project) {
					db.projects.create({
						name: project.name,
						area: 0,
						rooms: 0,
						floors: 0,
						price: 0,
						description: '123',
						image: '/img/projects' + item.image + '/' + project.image + '.jpg',
						projectId: newConst.id
					}).then(function () {
						console.log('Объект успешно добавлен')
					}).catch(function (err) {
						console.log(err)
					})
				})
			})
		})
	}
})



module.exports = constructionSeed