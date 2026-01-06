import { Box, Heart, LucideIcon, ShoppingCart } from 'lucide-react'

interface ICartInfoItem {
	name: string
	icon: LucideIcon
	link: string
}

export const cartInfoData: ICartInfoItem[] = [
	{
		name: 'Избранное',
		icon: Heart,
		link: ''
	},
	{
		name: 'Заказы',
		icon: Box,
		link: ''
	},
	{
		name: 'Корзина',
		icon: ShoppingCart,
		link: ''
	}
]
