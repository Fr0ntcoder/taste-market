import { IProductsSearchParams } from '@/types'

interface IReturnPaginationProducts {
	startPage: number
	perPage: number
	currentPage: number
}
export const paginationProducts = (
	params: IProductsSearchParams
): IReturnPaginationProducts => {
	const page = params?.page
	const itemsPerPage = params?.perPage || 3

	const currentPage = Number(page) || 1
	const perPage = Number(itemsPerPage)
	const startPage = (currentPage - 1) * perPage

	return { startPage, perPage, currentPage }
}
