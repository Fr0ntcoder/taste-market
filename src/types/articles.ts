export interface IArticle {
	_id: number
	title: string
	description: string
	text: string
	img: string
	createdAt: string
}

export interface IArticlesSearchParams {
	page?: string
	perPage?: string
}
