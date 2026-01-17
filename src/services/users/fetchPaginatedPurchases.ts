import { IProductsSearchParams } from '@/types'

import { fetchPurchases } from './fetchPurchases'

interface Props {
	searchQuery: IProductsSearchParams
}

export const fetchPaginatedPurchases = async ({ searchQuery }: Props) => {
	const page = searchQuery?.page
	const itemsPerPage = searchQuery?.perPage || 3

	const currentPage = Number(page) || 1
	const perPage = Number(itemsPerPage)
	const startPage = (currentPage - 1) * perPage

	const { products, error } = await fetchPurchases()

	const result = products.slice(startPage, startPage + perPage)

	return {
		total: products.length,
		products: result,
		error,
		startPage,
		perPage,
		currentPage
	}
}
