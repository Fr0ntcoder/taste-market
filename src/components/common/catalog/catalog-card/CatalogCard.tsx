import Image from 'next/image'

import { ICatalog } from '@/types'

/* interface Props extends ICatalog {
	onDragStart?: (e: React.DragEvent<HTMLAnchorElement>) => void
	onDragOver?: (e: React.DragEvent<HTMLAnchorElement>) => void
	onDrop?: (e: React.DragEvent<HTMLAnchorElement>) => void
	onDragLeave?: (e: React.DragEvent<HTMLAnchorElement>) => void
	onDragEnd?: () => void
	draggable?: boolean
} */

export const CatalogCard = ({ _id, img, title }: ICatalog) => {
	return (
		<div className='group relative cursor-pointer overflow-hidden rounded-md p-5'>
			<div className='min-h-40 w-full'>
				<Image
					src={img}
					fill
					alt='dfdfd'
					className='rounded object-cover'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>
			<div className='via-white-50 absolute top-0 left-0 z-2 h-full w-full bg-linear-to-t from-blue-500/90 to-white/20 transition-all duration-300 group-hover:opacity-80'></div>
			<h4 className='text-primary-foreground relative z-3 text-xl'>{title}</h4>
		</div>
	)
}
