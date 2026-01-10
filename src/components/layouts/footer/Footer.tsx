import { Phone } from 'lucide-react'

import { Container } from '@/components/ui'

import { Logo } from '@/components/common/logo'

import { FooterNav } from './footer-nav'
import { FooterSocial } from './footer-social'

export const Footer = () => {
	return (
		<footer className='border-secondary-foreground mt-10 border-t-2 border-solid py-5'>
			<Container className='flex items-center justify-between'>
				<div className='flex items-center gap-5'>
					<Logo className='flex-none' />
					<FooterNav />
				</div>
				<div className='flex items-center gap-5'>
					<FooterSocial />
					<a
						href='tel:+7964123456'
						className='flex items-center gap-0.5 text-lg font-bold'
					>
						<Phone />
						+7 (964) 123-45-67
					</a>
				</div>
			</Container>
		</footer>
	)
}
