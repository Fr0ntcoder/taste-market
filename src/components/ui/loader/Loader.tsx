import { LoaderCircle } from 'lucide-react'

interface Props {
	text?: string
}

export const Loader = ({ text = 'Загрузка...' }: Props) => {
	return (
		<div className='flex items-center text-xl'>
			{text}
			<LoaderCircle className='ml-4 animate-spin' size={30} />
		</div>
	)
}
