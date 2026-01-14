const BASE_URL = 'http://localhost:3000/api'

export const API_URL = {
	PRODUCTS: {
		CATEGORY: (category: string) => `${BASE_URL}/products?category=${category}`
	},
	ARTICLES: {
		HOME: `${BASE_URL}/articles`
	},
	USERS: {
		PURCHASES: `${BASE_URL}/users/purchases`
	}
}
