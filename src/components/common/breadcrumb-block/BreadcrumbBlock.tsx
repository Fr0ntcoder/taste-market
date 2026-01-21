'use client'

import { SlashIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	Container
} from '@/components/ui'

const PATH_LABEL_MAP: Record<string, string> = {
	'': 'Главная',
	products: 'Продукты',
	actions: 'Все акции',
	new: 'Все новинки',
	users: 'Пользователи',
	purchases: 'Все покупки',
	articles: 'Все статьи',
	catalog: 'Каталог'
}
export const BreadcrumbBlock = () => {
	const path = usePathname()

	if (path === '/') return null

	const segments = path.split('/').filter(Boolean)

	const breadcrumbItems = segments.map((segment, i) => {
		const href = '/' + segments.slice(0, i + 1).join('/')
		const label =
			PATH_LABEL_MAP[segment] ||
			segment.charAt(0).toUpperCase() + segment.slice(1)
		return {
			href,
			label
		}
	})
	return (
		<Container className='mb-10'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<Link href='/' className='font-bold'>
							Главная
						</Link>
						<SlashIcon size={14} />
					</BreadcrumbItem>

					{breadcrumbItems.map((item, i) => (
						<BreadcrumbItem key={item.href}>
							{i === breadcrumbItems.length - 1 ? (
								item.label
							) : (
								<>
									<Link href={item.href} className='font-bold'>
										{item.label}
									</Link>
									<SlashIcon size={14} />
								</>
							)}
						</BreadcrumbItem>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</Container>
	)
}
