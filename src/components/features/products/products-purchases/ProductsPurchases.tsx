import { Container } from '@/components/ui'

import { ProductCard } from '@/components/common/products'

import { fetchProductsByPurchases } from '@/services/products'

export const ProductsPurchases = async () => {
	const { error, products } = await fetchProductsByPurchases()

	if (error) return <div>{error}</div>
	if (!products) return <div>Загрузка...</div>
	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все покупки</h2>
			<div className='grid grid-cols-4 gap-5'>
				{products.map(product => (
					<ProductCard {...product} key={product._id} />
				))}
			</div>
		</Container>
	)
}
