import { Metadata } from 'next'

import { Articles } from '@/components/features/articles'

export const metadata: Metadata = {
	title: 'Все статьи',
	description: ''
}

export default function ArticlesPage() {
	return <Articles />
}
