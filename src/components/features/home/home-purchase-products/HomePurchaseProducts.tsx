import { ProductsBlock } from '@/components/common/products'

import { IProduct } from '@/types'

export const HomePurchaseProducts = async () => {
	let products: IProduct[] = []
	const error = null

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`
		)
		products = await res.json()
	} catch (error) {
		error = 'Ошибка при получении ранее купленых продуктов'
		console.log('Ошибка при получении ранее купленых продуктов', error)
	}

	if (error) return <div>Ошибка при получении ранее купленых продуктов</div>

	return (
		<ProductsBlock
			title='Покупали раньше'
			text='Все покупки'
			href=''
			items={products}
		/>
	)
}
