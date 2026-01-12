// eslint-disable-next-line @typescript-eslint/no-require-imports
const articles = require('./articleDatabase.json')

module.exports = {
	async up(db) {
		await db.collection('articles').insertMany(articles)
	},

	async down(db) {}
}
