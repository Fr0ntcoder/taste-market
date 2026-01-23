import { IArticlesSearchParams } from '@/types'

import { fetchArticles } from './fetchArticles'

interface Props {
	searchQuery: IArticlesSearchParams
}
export const fetchPaginatedArticles = async ({ searchQuery }: Props) => {
	const page = searchQuery?.page
	const itemsPerPage = searchQuery?.perPage || 3

	const currentPage = Number(page) || 1
	const perPage = Number(itemsPerPage)
	const startPage = (currentPage - 1) * perPage

	const { items, totalCount, error } = await fetchArticles({
		options: {
			pagination: {
				startIndex: startPage,
				perPage
			}
		}
	})

	return {
		total: totalCount,
		articles: items,
		error,
		startPage,
		perPage,
		currentPage
	}
}
