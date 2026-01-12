import { NextRequest, NextResponse } from 'next/server'

import { getDB } from '@/config/api-routes'
export const revalidate = 3600
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
	try {
		const category = new URL(request.url).searchParams.get('category')

		if (!category) {
			return NextResponse.json({
				error: {
					message: 'Категория не указана'
				},
				status: 400
			})
		}

		const db = await getDB()
		const products = await db
			.collection('products')
			.find({ categories: category })
			.toArray()
		return NextResponse.json(products)
	} catch (error) {
		console.error('Ошибка при получении продуктов:', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при получении продуктов'
			}
		})
	}
}
