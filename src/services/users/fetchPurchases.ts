import { API_SERVER_URL } from '@/config'
import { IProduct } from '@/types'

interface Props {
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

export const fetchPurchases = async ({
	options
}: Props): Promise<PropsReturn> => {
	const url = new URL(API_SERVER_URL.USERS.PURCHASES)

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

		if (!res.ok) throw new Error('Ошибка получения ваших покупок')

		const data = await res.json()

		return {
			items: data.products || data,
			totalCount: data.totalCount,
			error: null
		}
	} catch (error) {
		console.error('Ошибка загрузки покупок', error)
		return {
			items: [],
			totalCount: 0,
			error: 'Не удалось загрузить покупки'
		}
	}
}
