import { Container } from '@/components/ui/container'

import database from '@/mock-data/database.json'

import { ProductsBlock } from '../products/products-block'

import { HomeCarousel } from './home-carousel'

export const Home = () => {
	const products = database.products.filter(item =>
		item.categories.includes('actions')
	)
	const newProducts = database.products.filter(item =>
		item.categories.includes('new')
	)
	return (
		<div className='flex flex-col gap-12.5'>
			<HomeCarousel />
			<Container className='flex flex-col gap-12.5'>
				<ProductsBlock
					title='Акции'
					text='Все акции'
					link=''
					items={products}
				/>
				<ProductsBlock
					title='Новинки'
					text='Все новинки'
					link=''
					items={newProducts}
				/>
			</Container>
		</div>
	)
}
