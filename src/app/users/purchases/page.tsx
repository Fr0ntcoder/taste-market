import { Metadata } from 'next'

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

	return <ProductsPurchases searchQuery={params} />
}
