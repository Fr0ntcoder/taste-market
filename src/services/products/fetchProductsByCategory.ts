import { API_SERVER_URL } from '@/config'
import { IProduct } from '@/types'

interface IFetchProducts {
	products: IProduct[]
	error: null | string
}

export const fetchProductsByCategory = async (
	category: string
): Promise<IFetchProducts> => {
	try {
		const res = await fetch(API_SERVER_URL.PRODUCTS.CATEGORY(category), {
			next: {
				revalidate: 3600
			}
		})
		if (!res.ok) throw new Error('Ошибка получения продуктов')
		const products: IProduct[] = await res.json()
		return { products, error: null }
	} catch (error) {
		console.error('Ошибка загрузки товара', error)
		return {
			products: [],
			error: 'Не удалось загрузить товары'
		}
	}
}
