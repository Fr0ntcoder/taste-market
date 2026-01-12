import { NextResponse } from 'next/server'

import { getDB } from '@/config/api-routes'

export const revalidate = 3600
export async function GET() {
	try {
		const db = await getDB()
		const articles = await db.collection('articles').find().toArray()

		return NextResponse.json(articles)
	} catch (error) {
		console.error('Ошибка при получении статей:', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при получении статей'
			}
		})
	}
}
