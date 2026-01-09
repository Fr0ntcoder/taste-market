import { SpecialOfferCard } from './special-offer-card'
import { specialOfferData } from './special-offer.data'

export const SpecialOffers = () => {
	return (
		<div>
			<h3 className='mb-7.5 text-3xl font-bold'>Специальные предложения</h3>
			<div className='grid grid-cols-2 gap-5'>
				{specialOfferData.map((offer, i) => (
					<SpecialOfferCard item={offer} key={i} />
				))}
			</div>
		</div>
	)
}
