'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const UserInfo = ({ className }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={className}>
			<DropdownMenu onOpenChange={setIsOpen}>
				<DropdownMenuTrigger className='flex cursor-pointer items-center focus-visible:outline-0'>
					<Avatar className='h-12 w-12'>
						<AvatarImage
							src='/avatar.webp'
							alt='Логотип'
							className='flex-none'
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span>Илья</span>
					<ChevronDown
						className={cn(
							'ml-4 h-5 w-5 opacity-50 transition-transform duration-200',
							isOpen && 'rotate-180'
						)}
					/>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56' align='start'>
					<DropdownMenuGroup>
						<DropdownMenuItem>Профиль</DropdownMenuItem>
						<DropdownMenuItem>Инфа</DropdownMenuItem>
						<DropdownMenuItem>Настройки</DropdownMenuItem>
						<DropdownMenuItem>Выйти</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
