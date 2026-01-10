export const trimText = (text: string) => {
	return text.split(' ').slice(0, 20).join(' ')
}
