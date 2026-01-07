import { Container } from '@/components/ui/container'

import database from '@/mock-data/database.json'

import { ProductsBlock } from '../products/products-block'

import { HomeCarousel } from './home-carousel'

export const Home = () => {
	const products = database.products.filter(item =>
		item.categories.includes('actions')
	)
	return (
		<div className='flex flex-col gap-6'>
			<HomeCarousel />
			<Container>
				<ProductsBlock
					title='Акции'
					text='Все акции'
					link=''
					items={products}
				/>
			</Container>
		</div>
	)
}
