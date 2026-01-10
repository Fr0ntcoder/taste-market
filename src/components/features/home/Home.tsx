import { Container } from '@/components/ui/container'

import { ProductsBlock } from '@/components/common/products'

import articleDatabase from '@/mock-data/articleDatabase.json'
import database from '@/mock-data/database.json'

import { HomeArticles } from './home-articles'
import { HomeCarousel } from './home-carousel'
import { HomeMaps } from './home-maps'
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

	console.log(new Date())
	const articles = articleDatabase
	return (
		<div className='flex flex-col gap-12.5'>
			<HomeCarousel />
			<Container className='flex flex-col gap-12.5'>
				<ProductsBlock
					title='Акции'
					text='Все акции'
					href=''
					items={products}
				/>
				<ProductsBlock
					title='Новинки'
					text='Все новинки'
					href=''
					items={newProducts}
				/>
				<ProductsBlock
					title='Покупали раньше'
					text='Все покупки'
					href=''
					items={purchaseProducts}
				/>
				<SpecialOffers />
				<HomeMaps />
				<HomeArticles items={articles} />
			</Container>
		</div>
	)
}
