import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { IProduct } from '@/types/products'

import { ProductCard } from '../product-card'

interface Props {
	title: string
	text: string
	href: string
	items: IProduct[]
}
export const ProductsBlock = ({ title, text, href, items }: Props) => {
	return (
		<div className='flex flex-col gap-7.5'>
			<div className='flex items-center justify-between'>
				<h3 className='text-3xl font-bold'>{title}</h3>
				<Link href={href} className='flex items-center gap-3'>
					{text}
					<ChevronRight size={16} />
				</Link>
			</div>
			<div className='grid grid-cols-4 gap-5'>
				{items.map(item => (
					<ProductCard {...item} key={item._id} />
				))}
			</div>
		</div>
	)
}
