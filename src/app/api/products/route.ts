import { NextRequest, NextResponse } from 'next/server'

import { getDB } from '@/config'
import { CONSTANTS } from '@/config/constants'

export const revalidate = 3600
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
	try {
		const db = await getDB()
		const url = new URL(request.url)
		const category = url.searchParams.get('category')
		const randomLimit = url.searchParams.get('randomLimit')
		const startIndex = url.searchParams.get('startIndex') || '0'
		const perPage =
			url.searchParams.get('perPage') ||
			CONSTANTS.ITEMS_LIMIT_PER_PAGE_PRODUCTS.toString()

		if (!category) {
			return NextResponse.json({
				error: {
					message: 'Категория не указана'
				},
				status: 400
			})
		}

		const query = {
			categories: category,
			quantity: { $gt: 0 }
		}

		if (randomLimit) {
			const pipeline = [{ $match: query }, { $sample: { size: 4 } }]
			const products = await db
				.collection('products')
				.aggregate(pipeline)
				.toArray()

			return NextResponse.json(products)
		}

		const totalCount = await db.collection('products').countDocuments(query)

		const products = await db
			.collection('products')
			.find(query)
			.sort({ _id: 1 })
			.skip(parseInt(startIndex))
			.limit(parseInt(perPage))
			.toArray()
		return NextResponse.json({ products, totalCount })
	} catch (error) {
		console.error('Ошибка при получении продуктов:', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при получении продуктов'
			}
		})
	}
}
