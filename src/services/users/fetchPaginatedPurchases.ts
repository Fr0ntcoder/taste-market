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

	const { items, totalCount, error } = await fetchPurchases({
		options: {
			pagination: {
				startIndex: startPage,
				perPage
			}
		}
	})

	return {
		total: totalCount,
		products: items,
		error,
		startPage,
		perPage,
		currentPage
	}
}
