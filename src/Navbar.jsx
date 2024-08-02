import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import { Icon } from "@iconify/react"

const navigation = [
	{ name: "O que é?", href: "/" },
	{ name: "Quem Somos", href: "/quem-somos" },
	{ name: "Canais (IG, YT, Spotify)", href: "/canais" },
	{ name: "Cases", href: "/cases" },
]

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const handleMobileMenuClose = () => setMobileMenuOpen(false)

	return (
		<header className='absolute inset-x-0 top-0 z-50 bg-rose-600'>
			<nav
				aria-label='Global'
				className='flex items-center justify-between p-6 lg:px-8 text-white'>
				<div className='flex lg:flex-1'>
					<NavLink to='/' className='-m-1.5 p-1.5 hidden'>
						<span className='sr-only'>Your Company</span>
						<img alt='' src='./assets/logo.png' className='h-8 w-auto' />
					</NavLink>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						onClick={() => setMobileMenuOpen(true)}
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon aria-hidden='true' className='h-6 w-6' />
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					{navigation.map((item) => (
						<NavLink
							key={item.name}
							to={item.href}
							className='text-sm font-semibold leading-6 text-white'>
							{item.name}
						</NavLink>
					))}
				</div>
				{/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<Icon icon='hugeicons:instagram' height='24px' />
					<Icon icon='hugeicons:youtube' height='24px' />
					<Icon icon='hugeicons:spotify' height='24px' />
				</div> */}
				<div className='hidden lg:flex lg:flex-1 justify-center lg:justify-end'>
					<a
						href='https://www.instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2'>
						<Icon icon='hugeicons:instagram' height='24px' />
					</a>
					<a
						href='https://www.youtube.com'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2'>
						<Icon icon='hugeicons:youtube' height='24px' />
					</a>
					<a
						href='https://www.spotify.com'
						target='_blank'
						rel='noopener noreferrer'
						className='mx-2'>
						<Icon icon='hugeicons:spotify' height='24px' />
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={handleMobileMenuClose}>
				<DialogPanel className='fixed inset-0 z-50 overflow-y-auto bg-rose-700 px-6 py-6'>
					<div className='flex items-center justify-between'>
						<NavLink
							to='/'
							className='-m-1.5 p-1.5'
							onClick={handleMobileMenuClose}>
							<span className='sr-only'>Your Company</span>
							<img alt='' src='./assets/logo.png' className='h-8 w-auto' />
						</NavLink>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-white'
							onClick={handleMobileMenuClose}>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon aria-hidden='true' className='h-6 w-6' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										to={item.href}
										className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-rose-300/10'
										onClick={handleMobileMenuClose}>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
