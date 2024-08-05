import { Icon } from "@iconify/react"
import AnimatedPage from "../components/AnimatedPage"
import Footer from "../Footer"

export default function QuemSomos() {
	return (
		<>
			<AnimatedPage>
				<div className='bg-white min-h-screen'>
					<div className='mx-auto max-w-6xl py-20'>
						<h1 className='text-rose-600 text-6xl'>Quem Somos</h1>
						<div className='flex flex-col md:flex-row'>
							<div className='order-2 md:order-1 md:basis-1/4 p-4'>
								<div className='text-left'>
									<h3 className='text-blue-950 text-4xl w-3/4 mt-10'>
										Renato Kfouri
									</h3>
									<p className='mt-6 text-lg leading-8 text-blue-950'>
										É vice-presidente da Sociedade Brasileira de Imunizações
										(SBIm) e ex-presidente da entre 2011 e 2014, especializado
										em pediatria e neonatologia no Hospital do Servidor Público
										Estadual e em infectologia pediátrica na Sociedade
										Brasileira de Pediatria (SBP).
									</p>
									<div className='flex lg:flex-1 justify-center lg:justify-start mt-10 text-rose-700'>
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

							<div className='order-1 md:order-2 md:basis-1/2 p-4 mt-10'>
								<div className='text-left'>
									<img
										src='./assets/QuemSomos.png'
										alt='Center Column'
										className='mx-auto md:mx-0'
									/>
								</div>
							</div>

							<div className='order-3 md:order-3 md:basis-1/4 p-4'>
								<div className='text-left'>
									<h3 className='text-blue-950 text-4xl w-3/4 mt-10'>
										Rosana Richtmann
									</h3>
									<p className='mt-6 text-lg leading-8 text-blue-950'>
										É infectologista do Instituto de Infectologia Emilio Ribas,
										em São Paulo, desde 1988. Ex-presidente da Sociedade
										Paulista de Infectologia (SPI) 2011-2012 e Diretora do
										Comite de Imunização da Sociedade Brasileira de Infectologia
										(2019/20).
									</p>
									<div className='flex lg:flex-1 justify-center lg:justify-start mt-10 text-rose-700'>
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
						</div>
					</div>
				</div>
			</AnimatedPage>
		</>
	)
}
