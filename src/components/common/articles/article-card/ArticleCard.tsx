import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui'

import { IArticle } from '@/types'
import { formatDate } from '@/utils'

export const ArticleCard = ({
	title,
	description,
	img,
	createdAt
}: IArticle) => {
	const date = formatDate(createdAt)

	return (
		<div className='flex flex-col rounded shadow'>
			<div className='relative h-40 w-full'>
				<Image
					src={img}
					fill
					alt='статья'
					className='rounded object-cover'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>
			<div className='flex flex-1 flex-col p-2'>
				<span className='text-secondary block text-sm font-bold'>{date}</span>
				<h4 className='mb-3 text-xl font-bold'>{title}</h4>
				<p className='mb-4'>{description}</p>
				<Link href='' className='mt-auto'>
					<Button variant='outline' className='text-base'>
						Подробнее
					</Button>
				</Link>
			</div>
		</div>
	)
}
