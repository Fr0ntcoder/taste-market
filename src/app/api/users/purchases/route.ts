import { NextResponse } from 'next/server'

import { getDB } from '@/config/api-routes'

export const revalidate = 3600
export async function GET() {
	try {
		const db = await getDB()
		const user = await db.collection('users').findOne({})

		if (!user?.purchases?.length) {
			return NextResponse.json([])
		}
		const productsIds = user.purchases.map(
			(product: { id: number }) => product.id
		)

		const products = await db
			.collection('products')
			.find({ id: { $in: productsIds } })
			.toArray()

		return NextResponse.json(products)
	} catch (error) {
		console.error('Ошибка при получении ранее купленых продуктов:', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при получении ранее купленых продуктов'
			}
		})
	}
}
