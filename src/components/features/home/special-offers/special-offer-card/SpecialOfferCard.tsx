import Image from 'next/image'

import { cn } from '@/lib/utils'

import { ISpecialOffer } from '../special-offer.data'

interface Props {
	item: ISpecialOffer
}

export const SpecialOfferCard = ({ item }: Props) => {
	return (
		<div className={cn('grid h-60 grid-cols-2 rounded shadow', item.color)}>
			<div className='px-5 pt-20'>
				<h3 className='text-2xl font-bold'>{item.title}</h3>
				<p>{item.description}</p>
			</div>
			<div className='relative my-auto h-40 w-full rotate-12 overflow-hidden'>
				<Image
					src={item.img}
					fill
					alt='акция'
					className='rounded object-contain'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>
		</div>
	)
}
