import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { ArticleCard } from '@/components/common/articles'

import { APP_URL } from '@/config'
import { fetchArticles } from '@/services/articles'

export const HomeArticles = async () => {
	const { articles, error } = await fetchArticles()

	if (error) return <div>{error}</div>

	return (
		<div className='flex flex-col gap-7.5'>
			<div className='flex items-center justify-between'>
				<h3 className='text-3xl font-bold'>Статьи</h3>
				<Link href={APP_URL.ARTICLES.HOME} className='flex items-center gap-3'>
					Все статьи <ChevronRight size={16} />
				</Link>
			</div>
			<div className='grid grid-cols-3 gap-5'>
				{articles.slice(0, 3).map(article => (
					<ArticleCard {...article} key={article._id} />
				))}
			</div>
		</div>
	)
}
