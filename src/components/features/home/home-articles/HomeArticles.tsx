import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { ArticleCard } from '@/components/common/articles'

import { IArticle } from '@/types'

export const HomeArticles = async () => {
	let articles: IArticle[] = []
	const error = null

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`)
		articles = await res.json()
	} catch (error) {
		error = 'Ошибка получения статей'
		console.log('Ошибка получения статей', error)
	}

	if (error) return <div>Ошибка получения статей</div>

	return (
		<div className='flex flex-col gap-7.5'>
			<div className='flex items-center justify-between'>
				<h3 className='text-3xl font-bold'>Статьи</h3>
				<Link href='' className='flex items-center gap-3'>
					Все статьи <ChevronRight size={16} />
				</Link>
			</div>
			<div className='grid grid-cols-3 gap-5'>
				{articles.map(article => (
					<ArticleCard item={article} key={article._id} />
				))}
			</div>
		</div>
	)
}
