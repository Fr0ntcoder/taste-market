import { Metadata } from 'next'

import { ProductsNew } from '@/components/features/products/products-new'

import { IProductsSearchParams } from '@/types'

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

	return <ProductsNew params={params} />
}
