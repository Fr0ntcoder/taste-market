import { ProductsBlock } from '@/components/common/products'

import { API_URL, APP_URL } from '@/config'
import { IProduct } from '@/types'

export const HomeNewProducts = async () => {
	let products: IProduct[] = []
	const error = null

	try {
		const res = await fetch(API_URL.PRODUCTS.CATEGORY('new'))
		products = await res.json()
	} catch (error) {
		error = 'Ошибка получения новых продуктов'
		console.log('Ошибка ', error)
	}

	if (error) return <div>{error}</div>

	return (
		<ProductsBlock
			title='Новинки'
			text='Все новинки'
			href={APP_URL.PRODUCTS.NEW}
			items={products.slice(0, 4)}
		/>
	)
}
