import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO_DB_URL!)

const clientPromise = client.connect()
const SERVER_BASE_URL = process.env.API_SERVER_URL
const PREFIX_BASE_URL = '/api'
export const getDB = async () => {
	return (await clientPromise).db(process.env.MONGO_DB_NAME!)
}

export const API_SERVER_URL = {
	PRODUCTS: `${SERVER_BASE_URL}/products`,
	ARTICLES: `${SERVER_BASE_URL}/articles`,
	USERS: {
		PURCHASES: `${SERVER_BASE_URL}/users/purchases`
	}
}

export const API_ROUTES_URL = {
	PRODUCTS: `${PREFIX_BASE_URL}/articles`,
	USERS: {
		PURCHASES: `${PREFIX_BASE_URL}/users/purchases`
	},
	ARTICLES: `${PREFIX_BASE_URL}/articles`,
	CATALOG: `${PREFIX_BASE_URL}/catalog`
}

export const APP_ROUTES_URL = {
	PRODUCTS: {
		ACTIONS: '/products/actions',
		NEW: '/products/new'
	},
	USERS: {
		PURCHASES: '/users/purchases'
	},
	ARTICLES: '/articles',
	CATALOG: '/catalog'
}
