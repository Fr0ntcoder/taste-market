import { ProductsBlock } from '@/components/common/products'

import { IProduct } from '@/types'

export const HomeNewProducts = async () => {
	let products: IProduct[] = []
	const error = null

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=new`
		)
		products = await res.json()
	} catch (error) {
		error = 'Ошибка получения новых продуктов'
		console.log('Ошибка ', error)
	}

	if (error) return <div>Ошибка получения новых продуктов</div>

	return (
		<ProductsBlock
			title='Новинки'
			text='Все новинки'
			href=''
			items={products}
		/>
	)
}
