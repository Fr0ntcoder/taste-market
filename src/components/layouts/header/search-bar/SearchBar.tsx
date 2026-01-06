import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}
export const SearchBar = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'flex min-h-10 w-93.75 items-center rounded border border-green-500 px-2',
				className
			)}
		>
			<Input
				placeholder='Поиск...'
				className='border-0 p-0 text-base shadow-none'
			/>
			<button className='cursor-pointer'>
				<Search />
			</button>
		</div>
	)
}
