'use client'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { easeInOut, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { locationData } from './home-maps.data'

const MAP_HEIGHT = 410
const MAP_ZOOM = 9
const MAP_ANIMATION = {
	initial: { opacity: 0, scale: 0.98 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.98 },
	transition: {
		duration: 0.3,
		ease: easeInOut
	}
}

export const HomeMapsYandex = () => {
	const [activeId, setActiveId] = useState<string>(locationData[0]?.id ?? '')
	const currentCity = useMemo(
		() => locationData.find(item => item.id === activeId) ?? locationData[0],
		[activeId]
	)

	return (
		<div>
			<Tabs value={activeId} onValueChange={setActiveId}>
				<TabsList className='mb-5 flex bg-white'>
					{locationData.map(item => (
						<TabsTrigger
							value={item.id}
							key={item.id}
							className='data-[state=active]:bg-primary p-5 text-lg data-[state=active]:text-white'
						>
							{item.city}
						</TabsTrigger>
					))}
				</TabsList>
				<TabsContent value={currentCity.id}>
					<motion.div {...MAP_ANIMATION} key={currentCity.id}>
						<YMaps
							query={{
								lang: 'ru_RU',
								apikey: process.env.NEXT_PUBLIC_API_YANDEX_MAP
							}}
						>
							<Map
								defaultState={{ center: currentCity.center, zoom: MAP_ZOOM }}
								state={{ center: currentCity.center, zoom: MAP_ZOOM }}
								height={MAP_HEIGHT}
								key={currentCity.id}
							>
								{currentCity.shops.map(shop => (
									<Placemark geometry={shop.coordinates} key={shop.id} />
								))}
							</Map>
						</YMaps>
					</motion.div>
				</TabsContent>
			</Tabs>
		</div>
	)
}
