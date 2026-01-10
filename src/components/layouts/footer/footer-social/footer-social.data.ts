import { Facebook, Instagram, LucideIcon, Twitter } from 'lucide-react'

export interface FooterSocial {
	id: number
	icon: LucideIcon
	href: string
	color?: string
}

export const footerSocialData: FooterSocial[] = [
	{
		id: 1,
		icon: Instagram,
		href: '',
		color: 'text-fuchsia-600'
	},
	{
		id: 2,
		icon: Facebook,
		href: '',
		color: 'text-blue-600'
	},
	{
		id: 3,
		icon: Twitter,
		href: '',
		color: 'text-blue-400'
	}
]
