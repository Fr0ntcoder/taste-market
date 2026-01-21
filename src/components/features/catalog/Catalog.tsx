'use client'

import {
	DndContext,
	DragEndEvent,
	PointerSensor,
	TouchSensor,
	closestCenter,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import {
	SortableContext,
	arrayMove,
	verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

import { Button, ErrorBlock, Loader } from '@/components/ui'

import { ICatalog } from '@/types'

import { SortableCatalogCard } from './sortable-catalog-card'

export const Catalog = () => {
	const [categories, setCategories] = useState<ICatalog[]>([])
	const [originalCategories, setOriginalCategories] = useState<ICatalog[]>([])
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [isAdmin] = useState<boolean>(true)
	const [loading, setLoading] = useState(true)
	const [saving, setSaving] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8
			}
		}),
		useSensor(TouchSensor, {
			activationConstraint: {
				delay: 250,
				tolerance: 5
			}
		})
	)

	const saveChanges = async (): Promise<boolean> => {
		setSaving(true)
		try {
			const res = await fetch('/api/catalog', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(
					categories.map((cat, i) => ({
						_id: cat._id,
						order: i + 1,
						title: cat.title,
						img: cat.img
					}))
				)
			})

			if (!res.ok) {
				throw new Error('Не удалось сохранить порядок')
			}
			const result = await res.json()

			if (result.success) {
				console.log('Обновлен')
			}
			setOriginalCategories([...categories])
			return true
		} catch (err: unknown) {
			const errorMessage =
				err instanceof Error ? err.message : 'Неизвестная ошибка при сохранении'
			console.error('Save error:', err)
			setError(errorMessage)
			return false
		} finally {
			setSaving(false)
		}
	}

	const onHandleEdit = async (): Promise<void> => {
		if (!isEdit) {
			setOriginalCategories([...categories])
			setIsEdit(true)
		} else {
			const success = await saveChanges()
			if (success) {
				setIsEdit(false)
				setError(null)
			}
		}
	}

	const handleDragEnd = (event: DragEndEvent): void => {
		const { active, over } = event
		if (over?.id && active.id !== over.id) {
			setCategories((items): ICatalog[] => {
				const oldIndex = items.findIndex(i => i._id === active.id)
				const newIndex = items.findIndex(i => i._id === over.id)
				if (oldIndex !== -1 && newIndex !== -1) {
					return arrayMove(items, oldIndex, newIndex)
				}
				return items
			})
		}
	}

	const fetchCatalogData = async (): Promise<void> => {
		try {
			const res = await fetch('/api/catalog')
			if (!res.ok) throw new Error('Failed to fetch catalog data')
			const data: ICatalog[] = await res.json()
			setCategories(data.sort((a, b) => a.order - b.order))
			setOriginalCategories(data)
			setError(null)
		} catch (err: unknown) {
			const errorMessage =
				err instanceof Error ? err.message : 'Не удалось загрузить каталог'
			console.error(errorMessage)
			setError(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchCatalogData()
	}, [])

	if (loading) return <Loader text='Загрузка каталога' />
	if (error) return <ErrorBlock />

	const categoryIds: string[] = categories.map(item => item._id)

	return (
		<div>
			{isAdmin && (
				<Button
					onClick={onHandleEdit}
					className='mb-5 px-8 py-3 text-sm font-semibold shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50'
					disabled={saving || loading}
				>
					{saving
						? 'Сохранение...'
						: isEdit
							? 'Закончить редактирование'
							: 'Изменить расположение'}
				</Button>
			)}

			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<SortableContext
					items={categoryIds}
					strategy={verticalListSortingStrategy}
				>
					<div className='grid grid-cols-4 gap-4'>
						{categories.map(item => (
							<SortableCatalogCard key={item._id} item={item} isEdit={isEdit} />
						))}
					</div>
				</SortableContext>
			</DndContext>
		</div>
	)
}
