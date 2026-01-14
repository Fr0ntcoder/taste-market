import { Container } from '@/components/ui'

import { ArticleCard } from '@/components/common/articles'

import { API_URL } from '@/config'
import { IArticle } from '@/types'

export const Articles = async () => {
	let articles: IArticle[] = []
	const error = null

	try {
		const res = await fetch(API_URL.ARTICLES.HOME)
		articles = await res.json()
	} catch (error) {
		error = 'Ошибка получения статей'
		console.log('Ошибка получения статей', error)
	}

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
