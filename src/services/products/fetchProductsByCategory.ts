import { API_SERVER_URL } from '@/config'
import { IProduct } from '@/types'

interface Props {
	category: string
	options: {
		randomLimit?: number
		pagination?: { startIndex: number; perPage: number }
	}
}

interface PropsReturn {
	items: IProduct[]
	totalCount: number
	error: string | null
}

export const fetchProductsByCategory = async ({
	category,
	options
}: Props): Promise<PropsReturn> => {
	const url = new URL(API_SERVER_URL.PRODUCTS)
	url.searchParams.append('category', category)

	try {
		if (options?.randomLimit) {
			url.searchParams.append('randomLimit', options.randomLimit.toString())
		} else if (options?.pagination) {
			url.searchParams.append(
				'startIndex',
				options.pagination.startIndex.toString()
			)
			url.searchParams.append('perPage', options.pagination.perPage.toString())
		}

		const res = await fetch(url.toString(), {
			next: {
				revalidate: 3600
			}
		})

		if (!res.ok) throw new Error('Ошибка получения продуктов')

		const data = await res.json()

		return {
			items: data.products || data,
			totalCount: data.totalCount,
			error: null
		}
	} catch (error) {
		console.error('Ошибка загрузки товара', error)
		return {
			items: [],
			totalCount: 0,
			error: 'Не удалось загрузить товары'
		}
	}
}
