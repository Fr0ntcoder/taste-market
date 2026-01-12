import { ProductsBlock } from '@/components/common/products'

import { IProduct } from '@/types'

export const HomeActionsProducts = async () => {
	let products: IProduct[] = []
	const error = null

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=actions`
		)
		products = await res.json()
	} catch (error) {
		error = 'Ошибка получения акционных продуктов'
		console.log('Ошибка получения продуктов', error)
	}

	if (error) return <div>Ошибка получения акционных продуктов</div>

	return (
		<ProductsBlock title='Акции' text='Все акции' href='' items={products} />
	)
}
