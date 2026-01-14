import { Container } from '@/components/ui'

import { ArticleCard } from '@/components/common/articles'

import { fetchArticles } from '@/services/articles'

export const Articles = async () => {
	const { articles, error } = await fetchArticles()

	if (error) return <div>{error}</div>

	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все статьи</h2>
			<div className='grid grid-cols-3 gap-7.5'>
				{articles.map(article => (
					<ArticleCard {...article} key={article._id} />
				))}
			</div>
		</Container>
	)
}
