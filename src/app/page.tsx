import { Metadata } from 'next'

import { Home } from '@/components/features/home'

export const metadata: Metadata = {
	title: 'Главная страница',
	description: ''
}

export default async function Page() {
	return <Home />
}
