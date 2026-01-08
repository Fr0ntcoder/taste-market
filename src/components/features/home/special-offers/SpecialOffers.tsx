import { SpecialOfferCard } from './special-offer-card'
import { specialOfferData } from './special-offer.data'

export const SpecialOffers = () => {
	return (
		<div className='grid grid-cols-2 gap-5'>
			{specialOfferData.map((offer, i) => (
				<SpecialOfferCard item={offer} key={i} />
			))}
		</div>
	)
}
