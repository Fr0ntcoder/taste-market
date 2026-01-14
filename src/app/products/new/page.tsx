import { Metadata } from 'next'

import { ProductsNew } from '@/components/features/products/products-new'

export const metadata: Metadata = {
	title: 'Все новые продукты',
	description: ''
}
export default function NewPage() {
	return <ProductsNew />
}
