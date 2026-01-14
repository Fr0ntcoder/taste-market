import { Metadata } from 'next'

import { ProductsActions } from '@/components/features/products/products-actions'

export const metadata: Metadata = {
	title: 'Все акционные продукты',
	description: ''
}

export default function ActionsPage() {
	return <ProductsActions />
}
