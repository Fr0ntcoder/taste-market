import { Metadata } from 'next'
import { Suspense } from 'react'

import { Container, Loader } from '@/components/ui'

import { ProductsActions } from '@/components/features/products/products-actions'

import { IProductsSearchParams } from '@/types'

export const metadata: Metadata = {
	title: 'Все акционные продукты',
	description: ''
}

export default async function ActionsPage({
	searchParams
}: {
	searchParams: Promise<IProductsSearchParams>
}) {
	const params = await searchParams

	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все акции</h2>
			<Suspense fallback={<Loader text='Загрузка продуктов' />}>
				<ProductsActions searchQuery={params} />
			</Suspense>
		</Container>
	)
}
