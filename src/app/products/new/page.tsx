import { Metadata } from 'next'

import { Container, Loader } from '@/components/ui'

import { ProductsNew } from '@/components/features/products/products-new'

import { IProductsSearchParams } from '@/types'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Все новые продукты',
	description: ''
}
export default async function NewPage({
	searchParams
}: {
	searchParams: Promise<IProductsSearchParams>
}) {
	const params = await searchParams

	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все новинки</h2>
			<Suspense fallback={<Loader text="Загрузка новинок"/>}>
				<ProductsNew searchQuery={params} />
			</Suspense>
		</Container>
	)
}
