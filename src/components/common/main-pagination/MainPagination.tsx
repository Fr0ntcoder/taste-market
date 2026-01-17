'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

import {
	Button,
	Pagination,
	PaginationContent,
	PaginationItem
} from '@/components/ui'

interface Props {
	totalItems: number
	perPage: number
	currentPage: number
	basePath: string
}
export const MainPagination = ({
	totalItems,
	perPage,
	currentPage,
	basePath
}: Props) => {
	const router = useRouter()
	const maxPages = Math.max(1, Math.ceil(totalItems / perPage)) // исключаю деление на ноль
	const params = useSearchParams()

	const onHandlePageChange = (page: number) => {
		const newParams = new URLSearchParams(params)
		newParams.set('perPage', perPage.toString())
		newParams.set('page', page.toString())
		router.push(`${basePath}?${newParams.toString()}`, {
			scroll: false
		})
	}

	const onHandlePreviousPage = () => {
		if (currentPage > 1) {
			onHandlePageChange(currentPage - 1)
		}
	}

	const onHandleNextPage = () => {
		if (currentPage < maxPages) {
			onHandlePageChange(currentPage + 1)
		}
	}

	const onHandlePageClick = (page: number) => {
		if (page !== currentPage) {
			onHandlePageChange(page)
		}
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem className='mr-2.5'>
					<Button
						tabIndex={currentPage > 1 ? -1 : 0}
						aria-label='Предыдущая страница'
						onClick={onHandlePreviousPage}
						variant={currentPage > 1 ? 'default' : 'disabled'}
					>
						<ChevronLeft />
					</Button>
				</PaginationItem>
				{Array.from({ length: maxPages }).map((_, i) => (
					<PaginationItem key={i}>
						<Button
							tabIndex={i === currentPage ? 0 : -1}
							aria-current={i === currentPage ? 'page' : undefined}
							variant={i + 1 === currentPage ? 'default' : 'ghost'}
							onClick={() => onHandlePageClick(i + 1)}
						>
							{i + 1}
						</Button>
					</PaginationItem>
				))}
				<PaginationItem className='ml-2.5'>
					<Button
						tabIndex={currentPage >= maxPages ? -1 : 0}
						aria-label='Следуюшая страниц'
						onClick={onHandleNextPage}
						variant={currentPage < maxPages ? 'default' : 'disabled'}
						disabled={currentPage > maxPages}
					>
						<ChevronRight />
					</Button>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
