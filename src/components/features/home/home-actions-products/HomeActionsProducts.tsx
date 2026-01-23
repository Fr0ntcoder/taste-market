import { ProductsBlock } from '@/components/common/products'

import { APP_ROUTES_URL } from '@/config'
import { CONSTANTS } from '@/config/constants'
import { fetchProductsByCategory } from '@/services/products'

export const HomeActionsProducts = async () => {
	const { error, items } = await fetchProductsByCategory({
		category: 'actions',
		options: {
			randomLimit: CONSTANTS.ITEMS_LIMIT_PER_PAGE_PRODUCTS
		}
	})

	if (error) return <div>{error}</div>
	return (
		<ProductsBlock
			title='Акции'
			text='Все акции'
			href={APP_ROUTES_URL.PRODUCTS.ACTIONS}
			items={items}
		/>
	)
}
