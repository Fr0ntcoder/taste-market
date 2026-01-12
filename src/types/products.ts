export interface IProduct {
	_id: number
	title: string
	description: string
	img: string
	price: number
	discount: number
	rating: number
	categories?: string[]
	weight?: string
	volume?: string
}
