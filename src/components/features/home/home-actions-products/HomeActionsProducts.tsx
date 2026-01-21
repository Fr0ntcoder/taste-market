import { ProductsBlock } from '@/components/common/products'

import { APP_ROUTES_URL } from '@/config'
import { fetchProductsByCategory } from '@/services/products'

export const HomeActionsProducts = async () => {
	const { error, products } = await fetchProductsByCategory('actions')

	if (error) return <div>{error}</div>
	if (!products) return <div>Загрузка...</div>
	return (
		<ProductsBlock
			title='Акции'
			text='Все акции'
			href={APP_ROUTES_URL.PRODUCTS.ACTIONS}
			items={products.slice(0, 4)}
		/>
	)
}
