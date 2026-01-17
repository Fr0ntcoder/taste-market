import { API_URL } from '@/config'
import { IProduct } from '@/types'

export const fetchPurchases = async (): Promise<{
	products: IProduct[]
	error: null | string
}> => {
	try {
		const res = await fetch(API_URL.USERS.PURCHASES, {
			next: {
				revalidate: 3600
			}
		})
		if (!res.ok) throw new Error('Ошибка получения продуктов')

		const products: IProduct[] = await res.json()

		return { products, error: null }
	} catch (error) {
		console.error('Ошибка загрузки товара', error)
		return { products: [], error: 'Не удалось загрузить товары' }
	}
}
