import { Metadata } from 'next'

import { Container } from '@/components/ui'

import { Catalog } from '@/components/features/catalog'

export const metadata: Metadata = {
	title: 'Каталог',
	description: ''
}

export default async function CatalogPage() {
	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Каталог товаров</h2>
			<Catalog />
		</Container>
	)
}
