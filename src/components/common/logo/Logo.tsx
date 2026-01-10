import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
	priority?: boolean
}

export const Logo = ({ className, priority = false }: Props) => {
	return (
		<Link href='/' className={cn('relative inline-block h-20 w-20', className)}>
			<Image
				src='/logo.jpg'
				fill={true}
				alt='логотип'
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		</Link>
	)
}
