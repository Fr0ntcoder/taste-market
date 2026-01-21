import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

import { getDB } from '@/config'
import { ICatalog } from '@/types'

export const revalidate = 3600
export async function GET() {
	try {
		const db = await getDB()
		const catalog = await db.collection('catalog').find().toArray()

		return NextResponse.json(catalog)
	} catch (error) {
		console.error('Ошибка при получении каталога:', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при загрузке каталога'
			}
		})
	}
}

export async function POST(request: Request) {
	try {
		const db = await getDB()
		const updateCategories: ICatalog[] = await request.json()
		const bulkOps = updateCategories.map(cat => ({
			updateOne: {
				filter: { _id: new ObjectId(cat._id) },
				update: {
					$set: {
						order: cat.order,
						title: cat.title,
						img: cat.img
					}
				}
			}
		}))
		const result = await db.collection('catalog').bulkWrite(bulkOps)
		return NextResponse.json({
			success: true,
			updatedCount: result.modifiedCount
		})
	} catch (error) {
		console.error('Ошибка при обновлении порядка категорий', error)
		return NextResponse.json({
			error: {
				message: 'Ошибка при загрузке каталога'
			}
		})
	}
}
