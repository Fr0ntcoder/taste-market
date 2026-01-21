import { Metadata } from 'next'
import { Suspense } from 'react'

import { Container, Loader } from '@/components/ui'

import { Articles } from '@/components/features/articles'

import { IArticlesSearchParams } from '@/types'

export const metadata: Metadata = {
	title: 'Все статьи',
	description: ''
}

export default async function ArticlesPage({
	searchParams
}: {
	searchParams: Promise<IArticlesSearchParams>
}) {
	const params = await searchParams

	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все статьи</h2>
			<Suspense fallback={<Loader text='Загрузка статей' />}>
				<Articles searchQuery={params} />
			</Suspense>
		</Container>
	)
}
