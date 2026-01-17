import { Metadata } from 'next'

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

	return <Articles searchQuery={params} />
}
