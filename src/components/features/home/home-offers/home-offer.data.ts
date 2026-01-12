export interface ISpecialOffer {
	title: string
	description: string
	img: string
	color?: string
}

export const homeOfferData: ISpecialOffer[] = [
	{
		title: 'Оформите карту',
		description: 'И получайте бонусы на все покупки',
		img: '/home/special-offers-img1.jpg',
		color: 'bg-pink-400'
	},
	{
		title: 'Покупайте акционные товары',
		description: 'И получайте вдвое больше бонусов',
		img: '/home/special-offers-img2.png',
		color: 'bg-green-400'
	}
]
