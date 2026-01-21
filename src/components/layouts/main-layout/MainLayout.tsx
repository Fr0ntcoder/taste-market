import { PropsWithChildren } from 'react'

import { BreadcrumbBlock } from '@/components/common/breadcrumb-block'

import { Footer } from '../footer'
import { Header } from '../header'

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='relative flex min-h-full flex-col'>
			<Header />
			<BreadcrumbBlock />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}
