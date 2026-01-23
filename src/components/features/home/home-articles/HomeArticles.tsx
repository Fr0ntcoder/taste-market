import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { ArticleCard } from '@/components/common/articles'

import { APP_ROUTES_URL } from '@/config'
import { CONSTANTS } from '@/config/constants'
import { fetchArticles } from '@/services/articles'

export const HomeArticles = async () => {
	const { items, error } = await fetchArticles({
		options: {
			randomLimit: CONSTANTS.ITEMS_LIMIT_PER_PAGE_ARTICLES
		}
	})

	if (error) return <div>{error}</div>

	return (
		<div className='flex flex-col gap-7.5'>
			<div className='flex items-center justify-between'>
				<h3 className='text-3xl font-bold'>Статьи</h3>
				<Link
					href={APP_ROUTES_URL.ARTICLES}
					className='flex items-center gap-3'
				>
					Все статьи <ChevronRight size={16} />
				</Link>
			</div>
			<div className='grid grid-cols-3 gap-5'>
				{items.slice(0, 3).map(article => (
					<ArticleCard {...article} key={article._id} />
				))}
			</div>
		</div>
	)
}
