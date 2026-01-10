import Link from 'next/link'

import { cn } from '@/lib/utils'

import { footerSocialData } from './footer-social.data'

export const FooterSocial = () => {
	return (
		<ul className='grid grid-cols-3 gap-2'>
			{footerSocialData.map(item => (
				<li key={item.id}>
					<Link href={item.href}>
						<item.icon className={cn(item.color)} />
					</Link>
				</li>
			))}
		</ul>
	)
}
