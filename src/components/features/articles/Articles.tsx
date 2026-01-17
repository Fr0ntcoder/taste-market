import { Container } from '@/components/ui'

import { ArticleCard } from '@/components/common/articles'
import { MainPagination } from '@/components/common/main-pagination'

import { APP_URL } from '@/config'
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
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все статьи</h2>
			<div className='mb-10 grid grid-cols-3 gap-7.5'>
				{articles.map(article => (
					<ArticleCard {...article} key={article._id} />
				))}
			</div>
			{total > Number(perPage) && (
				<MainPagination
					basePath={APP_URL.ARTICLES.HOME}
					totalItems={total}
					perPage={perPage}
					currentPage={currentPage}
				/>
			)}
		</Container>
	)
}
