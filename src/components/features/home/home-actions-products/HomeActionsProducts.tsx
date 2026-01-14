import { ProductsBlock } from '@/components/common/products'

import { API_URL, APP_URL } from '@/config'
import { IProduct } from '@/types'

export const HomeActionsProducts = async () => {
	let products: IProduct[] = []
	const error = null

	try {
		const res = await fetch(API_URL.PRODUCTS.CATEGORY('actions'))
		products = await res.json()
	} catch (error) {
		error = 'Ошибка получения акционных продуктов'
		console.log('Ошибка получения продуктов', error)
	}

	if (error) return <div>{error}</div>

	return (
		<ProductsBlock
			title='Акции'
			text='Все акции'
			href={APP_URL.PRODUCTS.ACTIONS}
			items={products.slice(0, 4)}
		/>
	)
}
