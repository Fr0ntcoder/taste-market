import { IProduct, IProductsSearchParams } from '@/types'

import { fetchProductsByCategory } from './fetchProductsByCategory'

interface Props {
	category: string
	searchQuery: IProductsSearchParams
}

interface PropsReturn {
	total: number
	products: IProduct[]
	error: string | null
	startPage: number
	perPage: number
	currentPage: number
}
export const fetchPaginatedProducts = async ({
	category,
	searchQuery
}: Props): Promise<PropsReturn> => {
	const page = searchQuery?.page
	const itemsPerPage = searchQuery?.perPage || 3

	const currentPage = Number(page) || 1
	const perPage = Number(itemsPerPage)
	const startPage = (currentPage - 1) * perPage

	const { items, totalCount, error } = await fetchProductsByCategory({
		category,
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
