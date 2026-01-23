import { NextResponse } from 'next/server'

import { getDB } from '@/config'
import { CONSTANTS } from '@/config/constants'

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
	try {
		const db = await getDB()
		const url = new URL(request.url)
		const randomLimit = url.searchParams.get('randomLimit')
		const startIndex = url.searchParams.get('startIndex') || '0'
		const perPage =
			url.searchParams.get('perPage') ||
			CONSTANTS.ITEMS_LIMIT_PER_PAGE_PRODUCTS.toString()

		const user = await db.collection('users').findOne({})

		if (!user?.purchases?.length) {
			return NextResponse.json({ products: [], totalCount: 0 })
		}
		const productsIds = user.purchases.map(
			(product: { id: number }) => product.id
		)

		if (randomLimit) {
			const limit = parseInt(randomLimit)

			const purchases = await db
				.collection('products')
				.find({ id: { $in: productsIds } })
				.limit(limit)
				.toArray()

			return NextResponse.json(purchases)
		}

		const totalCount = productsIds.length

		const purchases = await db
			.collection('products')
			.find({ id: { $in: productsIds } })
			.sort({ _id: 1 })
			.skip(parseInt(startIndex))
			.limit(parseInt(perPage))
			.toArray()

		return NextResponse.json({ products: purchases, totalCount })
	} catch (error) {
		console.error('Ошибка при получении ранее купленых продуктов:', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при получении ранее купленых продуктов'
			}
		})
	}
}
