import { ProductsBlock } from '@/components/common/products'

import { API_URL, APP_URL } from '@/config'

import { IProduct } from '@/types'

export const HomePurchaseProducts = async () => {
	let products: IProduct[] = []
	const error = null

	try {
		const res = await fetch(API_URL.USERS.PURCHASES)
		products = await res.json()
	} catch (error) {
		error = 'Ошибка при получении ранее купленых продуктов'
		console.log('Ошибка при получении ранее купленых продуктов', error)
	}

	if (error) return <div>{error}</div>

	return (
		<ProductsBlock
			title='Покупали раньше'
			text='Все покупки'
			href={APP_URL.USERS.PURCHASES}
			items={products}
		/>
	)
}
