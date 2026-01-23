import Image from 'next/image'

import { ICatalog } from '@/types'

export const CatalogCard = ({ _id, img, title }: ICatalog) => {
	return (
		<div className='group relative flex min-h-52 cursor-pointer items-end overflow-hidden rounded-md'>
			<Image
				src={img}
				fill
				alt={title}
				className='rounded object-cover'
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
			<div className='via-white-50 absolute top-0 left-0 z-2 h-full w-full bg-linear-to-t from-blue-500/90 to-white/20 transition-all duration-300 group-hover:opacity-80'></div>
			<h4 className='text-primary-foreground relative z-3 p-5 text-xl'>
				{title}
			</h4>
		</div>
	)
}
