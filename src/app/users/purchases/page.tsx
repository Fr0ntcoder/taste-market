import { Metadata } from 'next'
import { Suspense } from 'react'

import { Container, Loader } from '@/components/ui'

import { ProductsPurchases } from '@/components/features/products/products-purchases'

import { IProductsSearchParams } from '@/types'

export const metadata: Metadata = {
	title: 'Все ранее купленные продукты',
	description: ''
}

export default async function PurchasesPage({
	searchParams
}: {
	searchParams: Promise<IProductsSearchParams>
}) {
	const params = await searchParams

	return (
		<Container>
			<h2 className='mb-5 text-2xl font-bold'>Все покупки</h2>
			<Suspense fallback={<Loader text='Загрузка покупок' />}>
				<ProductsPurchases searchQuery={params} />
			</Suspense>
		</Container>
	)
}
