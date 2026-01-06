import { PropsWithChildren } from 'react'

import { Footer } from '../footer'
import { Header } from '../header'

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
