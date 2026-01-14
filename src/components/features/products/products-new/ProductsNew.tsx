import { Container } from '@/components/ui'

import { ProductCard } from '@/components/common/products'

import { fetchProductsByCategory } from '@/services/products'

export const ProductsNew = async () => {
	const { error, products } = await fetchProductsByCategory('new')

	if (error) return <div>{error}</div>
	if (!products) return <div>Загрузка...</div>
	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все новинки</h2>
			<div className='grid grid-cols-4 gap-5'>
				{products.map(product => (
					<ProductCard {...product} key={product._id} />
				))}
			</div>
		</Container>
	)
}
