import { OfferCard } from '@/components/common/offers/offer-card'

import { homeOfferData } from './home-offer.data'

export const HomeOffers = () => {
	return (
		<div>
			<h3 className='mb-7.5 text-3xl font-bold'>Специальные предложения</h3>
			<div className='grid grid-cols-2 gap-5'>
				{homeOfferData.map((offer, i) => (
					<OfferCard item={offer} key={i} />
				))}
			</div>
		</div>
	)
}
