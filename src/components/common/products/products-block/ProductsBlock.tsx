import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { IProduct } from '@/types/products'

import { ProductCard } from '../product-card'

interface Props {
	title: string
	text: string
	link: string
	items: IProduct[]
}
export const ProductsBlock = ({ title, text, link, items }: Props) => {
	return (
		<div>
			<div className='mb-7.5 flex items-center justify-between'>
				<h3 className='text-4xl font-bold'>{title}</h3>
				<Link href={link} className='flex items-center gap-3'>
					{text} <ChevronRight size={16} />
				</Link>
			</div>
			<div className='grid grid-cols-4 gap-5'>
				{items.slice(0, 4).map(item => (
					<ProductCard item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
