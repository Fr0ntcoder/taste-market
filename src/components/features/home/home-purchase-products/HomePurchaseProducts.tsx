import { ProductsBlock } from '@/components/common/products'

import { APP_URL } from '@/config'
import { fetchProductsByPurchases } from '@/services/products'

export const HomePurchaseProducts = async () => {
	const { error, products } = await fetchProductsByPurchases()

	if (error) return <div>{error}</div>
	if (!products) return <div>Загрузка...</div>
	return (
		<ProductsBlock
			title='Покупали раньше'
			text='Все покупки'
			href={APP_URL.USERS.PURCHASES}
			items={products}
		/>
	)
}
