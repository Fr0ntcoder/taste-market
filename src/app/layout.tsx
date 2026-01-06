import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import { MainLayout } from '@/components/layouts/main-layout'

import './globals.css'

const roboto = Roboto({
	weight: ['400', '500', '600', '700'],
	subsets: ['cyrillic', 'latin'],
	variable: '--font-sans'
})

export const metadata: Metadata = {
	title: 'Вкус маркет',
	description: 'доставка питания'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru' className={roboto.variable}>
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
