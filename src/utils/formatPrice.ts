export const formatPrice = (price: number | string) => {
	const num = typeof price === 'string' ? parseFloat(price) : price

	if (isNaN(num)) return '0'

	return num.toLocaleString('ru-RU', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	})
}
