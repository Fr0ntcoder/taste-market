import { Star } from 'lucide-react'

interface Props {
	percent: number
}
export const PartialStar = ({ percent }: Props) => {
	return (
		<div className='relative h-5 w-5'>
			<Star className='stroke-muted-foreground h-5 w-5' />
			<div
				className='absolute top-0 left-0 h-full w-full overflow-hidden'
				style={{ width: `${percent}%` }}
			>
				<Star className='h-5 w-5 fill-yellow-400 stroke-yellow-400' />
			</div>
		</div>
	)
}
