import { Container } from '@/components/ui/container'

import { ProductsBlock } from '@/components/common/products/products-block'

import database from '@/mock-data/database.json'

import { HomeCarousel } from './home-carousel'
import { SpecialOffers } from './special-offers'

export const Home = () => {
	const products = database.products.filter(item =>
		item.categories.includes('actions')
	)
	const newProducts = database.products.filter(item =>
		item.categories.includes('new')
	)
	const purchaseProducts = database.users[0].purchases
		.map(user => {
			return database.products.find(product => product.id === user.id)
		})
		.filter(item => item !== undefined)

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
				<ProductsBlock
					title='Покупали раньше'
					text='Все покупки'
					link=''
					items={purchaseProducts}
				/>
				<SpecialOffers />
			</Container>
		</div>
	)
}
