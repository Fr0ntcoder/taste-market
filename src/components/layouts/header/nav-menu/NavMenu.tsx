import { Menu } from 'lucide-react'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const NavMenu = ({ className }: Props) => {
	return (
		<div className={cn('group relative', className)}>
			<div className='flex h-10 w-36 cursor-pointer items-center justify-between rounded bg-green-500 p-4 text-white group-hover:rounded-b-none'>
				<Menu width={24} height={24} className='flex-none' />
				<span className='block w-full text-center'>Каталог</span>
			</div>

			<div className='absolute top-full left-0 z-10 w-full overflow-hidden bg-green-500 p-2 text-white opacity-0 transition-all duration-500 group-hover:opacity-100'>
				<ul className='flex flex-col gap-2'>
					<li>Первый</li>
					<li>Второй</li>
					<li>Третий</li>
				</ul>
			</div>
		</div>
	)
}
