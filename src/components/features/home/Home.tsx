import { Container } from '@/components/ui/container'

import { ProductsBlock } from '@/components/common/products'

import articleDatabase from '@/mock-data/articleDatabase.json'
import database from '@/mock-data/database.json'
import { IProduct } from '@/types'

import { HomeArticles } from './home-articles'
import { HomeCarousel } from './home-carousel'
import { HomeMaps } from './home-maps'
import { SpecialOffers } from './special-offers'

export const Home = () => {
	const actionsProducts = database.products.filter(item =>
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

	const articles = articleDatabase

	const blocks: {
		title: string
		text: string
		items: IProduct[]
		href: string
	}[] = [
		{
			title: 'Акции',
			text: 'Все акции',
			items: actionsProducts,
			href: '/actions'
		},
		{ title: 'Новинки', text: 'Все новинки', items: newProducts, href: '/new' },
		{
			title: 'Покупали раньше',
			text: 'Все покупки',
			items: purchaseProducts,
			href: '/purchases'
		}
	]
	return (
		<div className='flex flex-col gap-12.5'>
			<HomeCarousel />
			<Container className='flex flex-col gap-12.5'>
				{blocks.map(block => (
					<ProductsBlock
						key={block.href}
						title={block.title}
						text={block.text}
						href={block.href}
						items={block.items}
					/>
				))}
				<SpecialOffers />
				<HomeMaps />
				<HomeArticles items={articles} />
			</Container>
		</div>
	)
}
