import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Icon } from "@iconify/react"

const navigation = [
	{ name: "O que é?", href: "/" },
	{ name: "Quem Somos", href: "/quem-somos" },
	{ name: "Canais (IG, YT, Spotify)", href: "/canais" },
	{ name: "Cases", href: "/cases" },
]

export default function Footer() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const handleMobileMenuClose = () => setMobileMenuOpen(false)

	return (
		<footer className='bg-rose-600 text-white'>
			<div className='container mx-auto px-6 lg:px-8 py-6'>
				<div className='flex flex-col lg:flex-row items-center justify-between'>
					<div className='flex lg:flex-1 mb-4 lg:mb-0'>
						<div to='/' className='-m-1.5 p-1.5'>
							<span className='sr-only'>R3K</span>
							<img
								alt='R3K Logo'
								src='./assets/logo.png'
								className='h-8 w-auto'
							/>
						</div>
					</div>
					<div className='flex lg:flex-1 justify-center lg:justify-end'>
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
				</div>
			</div>
		</footer>
	)
}
