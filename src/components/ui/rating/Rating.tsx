'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	max: number
	value: number
	readonly?: boolean
	onChange?: (value: number) => void
	className?: string
}
export const Rating = ({
	max,
	value,
	readonly,
	onChange,
	className
}: Props) => {
	const [isHover, setIsHover] = useState<number | null>(null)

	const handleClick = (i: number) => {
		if (readonly) return
		onChange?.(i)
	}

	const handleMouseEnter = (i: number) => {
		if (readonly) return
		setIsHover(i)
	}

	const handleMouseLeave = () => {
		if (readonly) return
		setIsHover(null)
	}

	const current = isHover ?? value
	return (
		<div className={cn('flex items-center gap-1', className)}>
			{Array.from({ length: max }).map((_, i) => {
				const index = i + 1
				const active = index <= current

				return (
					<button
						key={index}
						type='button'
						className={cn('p-0.5 cursor-pointer', readonly && 'cursor-default')}
						onClick={() => handleClick(index)}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
						aria-label={`Рейтинг ${index} из ${max}`}
					>
						<Star
							className={cn(
								'h-5 w-5 transition-colors',
								active
									? 'fill-yellow-400 stroke-yellow-400'
									: 'stroke-muted-foreground'
							)}
						/>
					</button>
				)
			})}
		</div>
	)
}
