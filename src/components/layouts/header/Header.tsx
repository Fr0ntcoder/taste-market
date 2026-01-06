import { Container } from '@/components/ui/container'

import { Logo } from '@/components/common/logo'

import { CartInfo } from './cart-info'
import { NavMenu } from './nav-menu'
import { SearchBar } from './search-bar'
import { UserInfo } from './user-info'

export const Header = () => {
	return (
		<header className='py-4'>
			<Container className='flex items-center justify-between gap-10'>
				<Logo className='flex-none' />
				<div className='flex gap-2'>
					<NavMenu />
					<SearchBar />
				</div>
				<CartInfo />
				<UserInfo />
			</Container>
		</header>
	)
}
