'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'

import { Button, Rating } from '@/components/ui'

import { IProduct } from '@/types'
import { calculateDiscount, formatPrice } from '@/utils'

export const ProductCard = ({
	price,
	img,
	title,
	discount,
	rating
}: IProduct) => {
	const calculateDiscountPrice = formatPrice(calculateDiscount(price, discount))
	const mainPrice = formatPrice(price)
	return (
		<div className='shadow-all relative flex flex-col gap-2 rounded-lg p-2 transition-transform duration-300 hover:scale-105'>
			<Heart className='text-primary absolute top-3 right-3 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded' />
			<div className='relative mx-auto h-45 w-60'>
				<Image
					src={img}
					fill
					alt={title}
					className='bg-top-left object-contain'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>
			{discount ? (
				<div className='relative flex justify-between gap-2 align-top'>
					<span className='bg-primary text-primary-foreground absolute -top-8 left-2.5 flex h-8 w-10 items-center justify-center rounded p-1 text-sm font-bold'>
						-{discount}%
					</span>
					<div className='flex flex-col'>
						<span className='text-xl font-bold'>
							{calculateDiscountPrice} ₽
						</span>
						<span className='text-secondary'>с картой</span>
					</div>
					<div className='flex flex-col'>
						<span className='block text-right text-lg font-bold'>
							{mainPrice} ₽
						</span>
						<span className='text-secondary'>обычная</span>
					</div>
				</div>
			) : (
				<span className='text-xl font-bold'>{mainPrice} ₽</span>
			)}
			<div className='mt-auto flex flex-col'>
				<h4 className='text-lg'>{title}</h4>
				<Rating max={5} value={rating.rate} className='mt-2 mb-3.5' />
				<Button variant={discount > 10 ? 'outline' : 'default'}>
					В корзину
				</Button>
			</div>
		</div>
	)
}
