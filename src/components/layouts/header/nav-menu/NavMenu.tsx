import { Menu } from 'lucide-react'
import Link from 'next/link'

import { APP_ROUTES_URL } from '@/config'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const NavMenu = ({ className }: Props) => {
	return (
		<div className={cn('group', className)}>
			<Link
				href={APP_ROUTES_URL.CATALOG}
				className='bg-primary text-primary-foreground flex h-10 w-36 cursor-pointer items-center justify-between rounded p-4 group-hover:rounded-b-none'
			>
				<Menu width={24} height={24} className='flex-none' />
				<span className='block w-full text-center'>Каталог</span>
			</Link>

			{/* <div className='absolute top-full left-0 z-10 w-full overflow-hidden bg-white opacity-0 shadow transition-all duration-500 group-hover:opacity-100'>
				<Container>
					<ul className='grid grid-cols-4 gap-2'>
						<li>Первый</li>
						<li>Второй</li>
						<li>Третий</li>
						<li>Первый</li>
						<li>Второй</li>
						<li>Третий</li>
						<li>Первый</li>
						<li>Второй</li>
						<li>Третий</li>
					</ul>
				</Container>
			</div> */}
		</div>
	)
}
