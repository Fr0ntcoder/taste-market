'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { PartialStar } from './partial-star'

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

	const handleClick = (e: React.MouseEvent, index: number) => {
		if (readonly) return

		const rect = e.currentTarget.getBoundingClientRect()
		const x = e.clientX - rect.left
		const percent = x / rect.width
		const fraction = Math.round(percent * 4) / 4 // 0.0, 0.25, 0.5, 0.75, 1.0
		const newValue = index - 1 + fraction

		onChange?.(Math.max(0, Math.min(max ?? 5, newValue)))
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
				const ratingDiff = current - i

				let star: React.ReactNode

				if (ratingDiff >= 1) {
					star = <Star className='h-5 w-5 fill-yellow-400 stroke-yellow-400' />
				} else if (ratingDiff > 0) {
					const fillPercent = (ratingDiff % 1) * 100
					star = <PartialStar percent={fillPercent} />
				} else {
					star = <Star className='stroke-muted-foreground h-5 w-5' />
				}

				return (
					<button
						key={index}
						type='button'
						className={cn('p-0.5', readonly && 'cursor-default')}
						onClick={e => handleClick(e, index)}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
						aria-label={`Рейтинг ${index} из ${max}`}
					>
						{star}
					</button>
				)
			})}
		</div>
	)
}
