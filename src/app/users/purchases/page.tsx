import { Metadata } from 'next'

import { ProductsPurchases } from '@/components/features/products/products-purchases'

export const metadata: Metadata = {
	title: 'Все ранее купленные продукты',
	description: ''
}

export default function PurchasesPage() {
	return <ProductsPurchases />
}
