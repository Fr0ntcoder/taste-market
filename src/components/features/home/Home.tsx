import { Container } from '@/components/ui/container'

import { HomeActionsProducts } from './home-actions-products'
import { HomeArticles } from './home-articles'
import { HomeCarousel } from './home-carousel'
import { HomeMaps } from './home-maps'
import { HomeNewProducts } from './home-new-products'
import { HomeOffers } from './home-offers'
import { HomePurchaseProducts } from './home-purchase-products'

export const Home = () => {
	return (
		<div className='flex flex-col gap-12.5'>
			<HomeCarousel />
			<Container className='flex flex-col gap-12.5'>
				<HomeActionsProducts />
				<HomeNewProducts />
				<HomePurchaseProducts />
				<HomeOffers />
				<HomeMaps />
				<HomeArticles />
			</Container>
		</div>
	)
}
