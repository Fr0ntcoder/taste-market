'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Rating } from '@/components/ui/rating'

import { IProduct } from '@/types/products'
import { calculateDiscount, formatPrice } from '@/utils'

interface Props {
	item: IProduct
}

export const ProductCard = ({ item }: Props) => {
	const calculateDiscountPrice = formatPrice(
		calculateDiscount(item.price, item.discount)
	)
	const mainPrice = formatPrice(item.price)
	return (
		<div className='relative flex flex-col gap-2 rounded-lg p-2 shadow transition-transform duration-300 hover:scale-105'>
			<div className='absolute top-3 right-3 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-gray-100'>
				<Heart className='text-gray-300' />
			</div>
			<div className='relative mx-auto h-45 w-60'>
				<Image
					src={item.img}
					fill
					alt={item.title}
					className='bg-top-left object-contain'
				/>
			</div>
			{item.discount ? (
				<div className='relative flex justify-between gap-2 align-top'>
					<span className='bg-primary absolute -top-8 left-2.5 flex h-8 w-10 items-center justify-center rounded p-1 text-sm font-bold text-white'>
						-{item.discount}%
					</span>
					<div className='flex flex-col'>
						<span className='text-xl font-bold'>
							{calculateDiscountPrice} ₽
						</span>
						<span className='text-gray-400'>с картой</span>
					</div>
					<div className='flex flex-col'>
						<span className='block text-right text-lg font-bold'>
							{mainPrice} ₽
						</span>
						<span className='text-gray-400'>обычная</span>
					</div>
				</div>
			) : (
				<span className='text-xl font-bold'>{mainPrice} ₽</span>
			)}
			<div className='mt-auto flex flex-col'>
				<h4 className='text-lg'>{item.title}</h4>
				<Rating max={5} value={item.rating} className='mt-2 mb-3.5' />
				<Button variant={item.discount > 10 ? 'outline' : 'default'}>
					В корзину
				</Button>
			</div>
		</div>
	)
}
