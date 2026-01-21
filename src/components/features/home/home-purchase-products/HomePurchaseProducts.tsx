import { ProductsBlock } from '@/components/common/products'

import { APP_ROUTES_URL } from '@/config'
import { fetchPurchases } from '@/services/users'

export const HomePurchaseProducts = async () => {
	const { error, products } = await fetchPurchases()

	if (error) return <div>{error}</div>

	return (
		<ProductsBlock
			title='Покупали раньше'
			text='Все покупки'
			href={APP_ROUTES_URL.USERS.PURCHASES}
			items={products.slice(0, 4)}
		/>
	)
}
