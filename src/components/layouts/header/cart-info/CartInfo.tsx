import Link from 'next/link'

import { cartInfoData } from './cart-info.data'

export const CartInfo = () => {
	return (
		<ul className='flex items-center gap-5'>
			{cartInfoData.map(item => (
				<li key={item.name}>
					<Link
						href={item.href}
						className='flex flex-col items-center justify-center'
					>
						<item.icon className='mb-1' />
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	)
}
