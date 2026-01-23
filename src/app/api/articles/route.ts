import { NextRequest, NextResponse } from 'next/server'

import { getDB } from '@/config'
import { CONSTANTS } from '@/config/constants'

export const revalidate = 3600
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
	try {
		const db = await getDB()
		const url = new URL(request.url)
		const randomLimit = url.searchParams.get('randomLimit')
		const startIndex = url.searchParams.get('startIndex') || '0'
		const perPage =
			url.searchParams.get('perPage') ||
			CONSTANTS.ITEMS_LIMIT_PER_PAGE_ARTICLES.toString()

		if (randomLimit) {
			const articles = await db
				.collection('articles')
				.find()
				.sort({ createdAt: -1 })
				.limit(parseInt(randomLimit))
				.toArray()

			return NextResponse.json(articles)
		}

		const totalCount = await db.collection('articles').countDocuments()

		const articles = await db
			.collection('articles')
			.find()
			.sort({ createdAt: -1 })
			.skip(parseInt(startIndex))
			.limit(parseInt(perPage))
			.toArray()
		return NextResponse.json({ articles, totalCount })
	} catch (error) {
		console.error('Ошибка при получении статей:', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при получении статей'
			}
		})
	}
}
