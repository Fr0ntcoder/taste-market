'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HomeMapsBlock = dynamic(
	() => import('./home-maps-block/').then(m => m.HomeMapsBlock),
	{
		ssr: false,
		loading: () => <div>Загрузка...</div>
	}
)
export const HomeMaps = () => {
	return (
		<div>
			<h3 className='mb-7.5 text-3xl font-bold'>Наши магазины</h3>
			<Suspense>
				<HomeMapsBlock />
			</Suspense>
		</div>
	)
}
