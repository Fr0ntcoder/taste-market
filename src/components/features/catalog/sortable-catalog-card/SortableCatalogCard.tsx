import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { CatalogCard } from '@/components/common/catalog'

import { ICatalog } from '@/types'

export const SortableCatalogCard = ({
	item,
	isEdit
}: {
	item: ICatalog
	isEdit: boolean
}) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		isDragging,
		transform,
		transition
	} = useSortable({ id: item._id, disabled: !isEdit })

	return (
		<div
			ref={setNodeRef}
			style={{
				transform: CSS.Translate.toString(transform),
				transition: isDragging ? 'none' : transition,
				opacity: isDragging ? 0.7 : 1
			}}
			className={`group relative transition-all duration-150 ease-out hover:scale-[1.02] ${
				isDragging
					? 'z-[9999] scale-102 cursor-grabbing border-2 border-blue-400 shadow-2xl !duration-0'
					: 'cursor-grab hover:shadow-xl'
			}`}
			{...attributes}
			{...listeners}
		>
			<CatalogCard {...item} />
		</div>
	)
}
