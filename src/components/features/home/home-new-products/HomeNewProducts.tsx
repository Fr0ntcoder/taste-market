import { ProductsBlock } from '@/components/common/products'

import { APP_URL } from '@/config'
import { fetchProductsByCategory } from '@/services/products'

export const HomeNewProducts = async () => {
	const { error, products } = await fetchProductsByCategory('new')

	if (error) return <div>{error}</div>
	if (!products) return <div>Загрузка...</div>
	return (
		<ProductsBlock
			title='Новинки'
			text='Все новинки'
			href={APP_URL.PRODUCTS.NEW}
			items={products.slice(0, 4)}
		/>
	)
}
