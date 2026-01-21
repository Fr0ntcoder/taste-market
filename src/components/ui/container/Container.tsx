import { ComponentProps, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

export const Container = ({
	className,
	children
}: PropsWithChildren<ComponentProps<'div'>>) => {
	return (
		<div className={cn('mx-auto w-full max-w-7xl px-4', className)}>
			{children}
		</div>
	)
}
