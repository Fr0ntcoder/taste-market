import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { ArticleCard } from '@/components/common/articles'

import { IArticle } from '@/types'

interface Props {
	items: IArticle[]
}
export const HomeArticles = ({ items }: Props) => {
	return (
		<div className='flex flex-col gap-7.5'>
			<div className='flex items-center justify-between'>
				<h3 className='text-3xl font-bold'>Статьи</h3>
				<Link href='' className='flex items-center gap-3'>
					Все статьи <ChevronRight size={16} />
				</Link>
			</div>
			<div className='grid grid-cols-3 gap-5'>
				{items.map(article => (
					<ArticleCard item={article} key={article.id} />
				))}
			</div>
		</div>
	)
}
