import Link from 'next/link'

import { footerNavData } from './footer-nav.data'

export const FooterNav = () => {
	return (
		<ul className='flex items-center gap-3'>
			{footerNavData.map(item => (
				<li key={item.id}>
					<Link href={item.href} className='hover:underline'>
						{item.text}
					</Link>
				</li>
			))}
		</ul>
	)
}
