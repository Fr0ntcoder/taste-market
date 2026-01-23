import { ProductsBlock } from '@/components/common/products'

import { APP_ROUTES_URL } from '@/config'
import { CONSTANTS } from '@/config/constants'
import { fetchProductsByCategory } from '@/services/products'

export const HomeNewProducts = async () => {
	const { error, items } = await fetchProductsByCategory({
		category: 'new',
		options: {
			randomLimit: CONSTANTS.ITEMS_LIMIT_PER_PAGE_PRODUCTS
		}
	})

	if (error) return <div>{error}</div>

	return (
		<ProductsBlock
			title='Новинки'
			text='Все новинки'
			href={APP_ROUTES_URL.PRODUCTS.NEW}
			items={items}
		/>
	)
}
