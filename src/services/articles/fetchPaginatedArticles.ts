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

	const { articles, error } = await fetchArticles()

	const result = articles.slice(startPage, startPage + perPage)

	return {
		total: articles.length,
		articles: result,
		error,
		startPage,
		perPage,
		currentPage
	}
}
