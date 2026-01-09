interface IILocationYandexShops {
	id: string
	name: string
	coordinates: number[]
}

export interface ILocationYandexMap {
	id: string
	city: string
	center: number[]
	shops: IILocationYandexShops[]
}

export const locationData: ILocationYandexMap[] = [
	{
		id: '2b4f1eab-4df0-46d5-8757-8c87443529a3',
		city: 'Москва',
		center: [55.755864, 37.617698],
		shops: [
			{
				id: 'f1aa18b5-4da7-48a6-abea-9049903b966a',
				name: 'Рублёвское ш., 70, корп. 6',
				coordinates: [55.770775, 37.376635]
			},
			{
				id: '1659e77d-a77e-416c-a6aa-b4a323529de1',
				name: 'ул. Вучетича, 22',
				coordinates: [55.811735, 37.558113]
			},
			{
				id: '883e957f-43d8-4105-8e43-45b9b1fadc0b',
				name: 'ул. Академика Янгеля, 1, корп. 1',
				coordinates: [55.594056, 37.598115]
			},
			{
				id: '46e2c21e-c3d1-45f0-8f7d-8432962076fb',
				name: 'Вешняковская ул., 15А',
				coordinates: [55.735256, 37.829952]
			}
		]
	},
	{
		id: '0e57c765-90b4-4927-8bfa-1190fb58b663',
		city: 'Санкт-Петербург',
		center: [59.938784, 30.314997],
		shops: [
			{
				id: 'c6eb49b0-108e-4f68-af61-cca8d67f5eec',
				name: 'Средний просп. Васильевского острова, 83',
				coordinates: [59.936805, 30.254977]
			},
			{
				id: '24fd3a5a-cbbf-4b6b-84f0-7a56286c9ccd',
				name: 'ул. Бабушкина, 53',
				coordinates: [59.883482, 30.431949]
			}
		]
	},
	{
		id: '4627ae93-2dea-48d2-a549-ce2114998297',
		city: 'Краснодар',
		center: [45.03547, 38.975313],
		shops: [
			{
				id: 'bd616f12-2a22-47d5-becb-144adce9fb2a',
				name: 'Красная ул., 145/1',
				coordinates: [45.047609, 38.977721]
			}
		]
	},
	{
		id: 'f6ef00f4-c831-41ff-9889-3e3f1b13831c',
		city: 'Сочи',
		center: [43.585472, 39.723098],
		shops: [
			{
				id: '13b7f011-164a-4c78-ae8a-2f907a4c71db',
				name: 'ул. Турчинского, 44, п. г. т. Красная Поляна',
				coordinates: [43.678986, 40.206014]
			},
			{
				id: '2209383b-bc5c-479e-a0a1-ce2315413f88',
				name: 'ул. Попова, 23, Сириус',
				coordinates: [43.391573, 39.985846]
			}
		]
	},
	{
		id: 'b6bc3c62-5914-4714-9169-0a0c43b01522',
		city: 'Казань',
		center: [55.796127, 49.106414],
		shops: [
			{
				id: 'e737d84c-fe18-4cc6-8a64-4c26327e7074',
				name: 'Спортивная ул., 104, Иннополис',
				coordinates: [55.747272, 48.743117]
			},
			{
				id: '37be860a-d54f-431c-8565-0d0297db454c',
				name: 'ул. Аметьевская Магистраль, 16, корп. 1',
				coordinates: [55.767919, 49.172323]
			}
		]
	}
]
