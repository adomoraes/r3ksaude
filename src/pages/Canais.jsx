import AnimatedPage from "../components/AnimatedPage"
import { Icon } from "@iconify/react"
import Footer from "../Footer"

export default function Canais() {
	return (
		<>
			{" "}
			<AnimatedPage>
				<div className='bg-white min-h-screen flex items-center'>
					<div className='mx-auto lg:flex lg:h-screen lg:items-center lg:justify-center max-w-6xl py-30'>
						<h1 className='text-rose-600 text-6xl mb-10 lg:mb-0'>Canais</h1>
						<div className='flex flex-col gap-6 sm:flex-row sm:flex-wrap lg:flex-1 my-8 lg:ml-8'>
							<div className='flex flex-1 items-center text-xs leading-5 justify-center md:justify-start font-medium rounded-full p-8 bg-blue-950 text-white md:-mr-30p'>
								<div className='mr-3'>
									<Icon icon='hugeicons:instagram' height='36px' />
								</div>
								<a className='text-xl' href='#'>
									@r3koficial
								</a>
							</div>
							<div className='flex flex-1 items-center text-xs leading-5 justify-center md:justify-start font-medium rounded-full p-8 bg-rose-600 text-white md:-mr-30p'>
								<div className='mr-3'>
									<Icon icon='hugeicons:youtube' height='36px' />
								</div>
								<a className='text-xl' href='#'>
									@r3koficial
								</a>
							</div>
							<div className='flex flex-1 items-center text-xs leading-5 justify-center md:justify-start font-medium rounded-full p-8 bg-blue-950 text-white'>
								<div className='mr-3'>
									<Icon icon='hugeicons:spotify' height='36px' />
								</div>
								<a className='text-xl' href='#'>
									R3K Sua Saúde Nossa Especialidade
								</a>
							</div>
						</div>
					</div>
				</div>{" "}
			</AnimatedPage>
		</>
	)
}
