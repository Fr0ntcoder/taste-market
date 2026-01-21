import { API_SERVER_URL } from '@/config'
import { IArticle } from '@/types'

interface IFetchArticles {
	articles: IArticle[]
	error: string | null
}

export const fetchArticles = async (): Promise<IFetchArticles> => {
	try {
		const res = await fetch(API_SERVER_URL.ARTICLES, {
			next: {
				revalidate: 3600
			}
		})

		if (!res.ok) throw new Error('Ошибка получения статей')

		const articles: IArticle[] = await res.json()

		return { articles, error: null }
	} catch (error) {
		console.log('Ошибка получения статей', error)
		return { articles: [], error: 'Ошибка получения статей' }
	} 
}
