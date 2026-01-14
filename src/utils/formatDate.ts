export const formatDate = (date: string): string => {
	const parsedDate = new Date(date)

	if (isNaN(parsedDate.getTime())) {
		console.warn(`Не валидная дата: ${date}`)
		return ''
	}

	return new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	}).format(parsedDate)
}
