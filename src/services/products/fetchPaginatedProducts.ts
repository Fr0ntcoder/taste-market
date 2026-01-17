import { IProductsSearchParams } from '@/types'

import { fetchProductsByCategory } from './fetchProductsByCategory'

interface Props {
	category: string
	searchQuery: IProductsSearchParams
}

export const fetchPaginatedProducts = async ({ category, searchQuery }: Props) => {
	const page = searchQuery?.page
	const itemsPerPage = searchQuery?.perPage || 3

	const currentPage = Number(page) || 1
	const perPage = Number(itemsPerPage)
	const startPage = (currentPage - 1) * perPage

	const { products, error } = await fetchProductsByCategory(category)

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
