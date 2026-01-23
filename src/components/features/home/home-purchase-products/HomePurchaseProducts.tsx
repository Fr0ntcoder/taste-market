import { ProductsBlock } from '@/components/common/products'

import { APP_ROUTES_URL } from '@/config'
import { CONSTANTS } from '@/config/constants'
import { fetchPurchases } from '@/services/users'

export const HomePurchaseProducts = async () => {
	const { error, items } = await fetchPurchases({
		options: {
			randomLimit: CONSTANTS.ITEMS_LIMIT_PER_PAGE_PRODUCTS
		}
	})

	if (error) return <div>{error}</div>

	return (
		<ProductsBlock
			title='Покупали раньше'
			text='Все покупки'
			href={APP_ROUTES_URL.USERS.PURCHASES}
			items={items}
		/>
	)
}
