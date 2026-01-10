import { Box, Heart, LucideIcon, ShoppingCart } from 'lucide-react'

interface ICartInfoItem {
	name: string
	icon: LucideIcon
	href: string
}

export const cartInfoData: ICartInfoItem[] = [
	{
		name: 'Избранное',
		icon: Heart,
		href: ''
	},
	{
		name: 'Заказы',
		icon: Box,
		href: ''
	},
	{
		name: 'Корзина',
		icon: ShoppingCart,
		href: ''
	}
]
