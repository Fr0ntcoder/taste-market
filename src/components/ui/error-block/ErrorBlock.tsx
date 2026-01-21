import { Frown } from 'lucide-react'

interface Props {
	error?: string
}
export const ErrorBlock = ({ error = 'Ошибка' }: Props) => {
	return (
		<div className='flex items-center'>
			{error}
			<Frown />
		</div>
	)
}
