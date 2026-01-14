import { Container } from '@/components/ui'

import { ProductCard } from '@/components/common/products'

import { API_URL } from '@/config/api-url'
import { IProduct } from '@/types'

export const ProductsPurchases = async () => {
	let products: IProduct[] = []
	const error = null

	try {
		const res = await fetch(API_URL.PRODUCTS.CATEGORY('new'))
		products = await res.json()
	} catch (error) {
		error = 'Ошибка получения новых продуктов'
		console.log('Ошибка получения новых продуктов', error)
	}

	if (error) return <div>{error}</div>

	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все покупки</h2>
			<div className='grid grid-cols-4 gap-7.5'>
				{products.map(product => (
					<ProductCard {...product} key={product._id} />
				))}
			</div>
		</Container>
	)
}
