import { ArticleCard } from '@/components/common/articles'
import { MainPagination } from '@/components/common/main-pagination'

import { APP_ROUTES_URL } from '@/config'
import { fetchPaginatedArticles } from '@/services/articles/'
import { IArticlesSearchParams } from '@/types'

interface Props {
	searchQuery: IArticlesSearchParams
}

export const Articles = async ({ searchQuery }: Props) => {
	const { error, articles, total, perPage, currentPage } =
		await fetchPaginatedArticles({ searchQuery })

	if (error) return <div>{error}</div>

	return (
		<>
			<div className='mb-10 grid grid-cols-3 gap-7.5'>
				{articles.map(article => (
					<ArticleCard {...article} key={article._id} />
				))}
			</div>
			{total > Number(perPage) && (
				<MainPagination
					basePath={APP_ROUTES_URL.ARTICLES}
					totalItems={total}
					perPage={perPage}
					currentPage={currentPage}
				/>
			)}
		</>
	)
}
