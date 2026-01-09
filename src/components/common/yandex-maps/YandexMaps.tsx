import { Map, YMaps } from '@pbe/react-yandex-maps'

interface Props {
	text?: string
}

const location = [
	{
		id: '2b4f1eab-4df0-46d5-8757-8c87443529a3',
		city: 'Москва',
		shops: [
			{
				id: 'f1aa18b5-4da7-48a6-abea-9049903b966a',
				name: 'Улица 1',
				geo: '12121212121'
			},
			{
				id: '4544rfgfr',
				name: 'Улица 2',
				geo: '12121212121'
			},
			{
				id: '4544rfgfr',
				name: 'Улица 3',
				geo: '12121212121'
			},
		]
	},
	{
		id: 'dfdcvghgh3e343',
		city: 'Санкт-Петербург',
		shops: [
			{
				id: '4544rfgfr',
				name: 'Улица 1',
				geo: '12121212121'
			},
			{
				id: '4544rfgfr',
				name: 'Улица 2',
				geo: '12121212121'
			},
		]
	},
	{
		id: 'dfdcdfdfdv3e343',
		city: 'Иркутск',
		shops: [
			{
				id: '4544rfgfr',
				name: 'Улица 1',
				geo: '12121212121'
			},
			{
				id: '4544rfgfr',
				name: 'Улица 2',
				geo: '12121212121'
			},
			{
				id: '4544rfgfr',
				name: 'Улица 3',
				geo: '12121212121'
			},
		]
	}
]

export const YandexMaps = ({}: Props) => {
	return (
		<YMaps
			query={{
				lang: 'ru_RU',
				apikey: process.env.NEXT_PUBLIC_API_YANDEX_MAP
			}}
		>
			<Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} height={200} />
		</YMaps>
	)
}
