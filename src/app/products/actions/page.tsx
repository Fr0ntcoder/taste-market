import { Metadata } from 'next'

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

	return <ProductsActions searchQuery={params} />
}
