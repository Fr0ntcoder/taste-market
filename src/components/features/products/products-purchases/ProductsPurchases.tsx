import { Container } from '@/components/ui'

import { MainPagination } from '@/components/common/main-pagination'
import { ProductCard } from '@/components/common/products'

import { APP_URL } from '@/config'
import { fetchPaginatedPurchases } from '@/services/users'
import { IProductsSearchParams } from '@/types'

interface Props {
	searchQuery: IProductsSearchParams
}

export const ProductsPurchases = async ({ searchQuery }: Props) => {
	const { error, products, total, perPage, currentPage } =
		await fetchPaginatedPurchases({ searchQuery })

	if (error) return <div>{error}</div>

	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все покупки</h2>
			<div className='mb-10 grid grid-cols-4 gap-5'>
				{products.map(product => (
					<ProductCard {...product} key={product._id} />
				))}
			</div>
			{total > Number(perPage) && (
				<MainPagination
					basePath={APP_URL.USERS.PURCHASES}
					totalItems={total}
					perPage={perPage}
					currentPage={currentPage}
				/>
			)}
		</Container>
	)
}
