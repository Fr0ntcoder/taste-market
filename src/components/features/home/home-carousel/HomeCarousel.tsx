'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

import {
	Carousel,
	CarouselContent,
	CarouselItem
} from '@/components/ui/carousel'

import { homeCarouselData } from './home-carousel.data'

export const HomeCarousel = () => {
	return (
		<Carousel
			className='w-full'
			plugins={[
				Autoplay({
					delay: 5000
				})
			]}
		>
			<CarouselContent>
				{homeCarouselData.map((item, i) => (
					<CarouselItem key={i} className='basis-1/2'>
						<Link href={item.href} className='relative block min-h-95'>
							<Image
								src={item.img}
								fill
								alt='Акции'
								style={{
									objectFit: 'cover'
								}}
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
