import { ComponentProps, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

export const Container = ({
	className,
	children
}: PropsWithChildren<ComponentProps<'div'>>) => {
	return (
		<div className={cn('max-w-7xl w-full mx-auto px-4', className)}>
			{children}
		</div>
	)
}
