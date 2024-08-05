import AnimatedPage from "../components/AnimatedPage"
import Footer from "../Footer"

export default function OQueE() {
	return (
		<>
			<AnimatedPage>
				<div className='bg-rose-600 min-h-screen'>
					<div className='bg-[url("./assets/bgHeroMic.png")] md:bg-auto bg-[length:20%] bg-bottom relative isolate px-6 pt-14 lg:px-8 h-full overflow-hidden bg-no-repeat'>
						<div
							aria-hidden='true'
							className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
							<div
								style={{
									clipPath:
										"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
								}}
								className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
							/>
						</div>
						<div className='mx-auto max-w-6xl py-10 pb-36'>
							<div className='flex flex-col md:flex-row'>
								<div className='md:basis-3/5 p-4'>
									<div className='text-left'>
										<img
											src='./assets/logo.png'
											alt='Logo'
											className='mx-auto md:mx-0'
										/>
										<h1 className='md:absolute md:block md:w-[auto] lg:w-[160%] md:bottom-[5%] order-2 md:order-1 open-sans-800 mt-6 text-5xl font-bold tracking-tight text-white md:text-[5rem] lg:text-[7.25rem] md:leading-[4.5rem] lg:leading-[5.5rem]'>
											Sua saúde, <br />
											nossa especialidade.
										</h1>
										<p className='order-1 md:order-2 mt-6 text-lg leading-8 text-white w-4/5'>
											<strong>
												O R3K nasceu em outubro de 2023, do desejo dos médicos
												Renato Kfouri e Rosana Richtmann
											</strong>{" "}
											de fornecer informações atualizadas e confiáveis à
											população sobre saúde.
										</p>
									</div>
								</div>
								<div className='md:basis-2/5 p-4'>
									<div className='text-left'>
										<img
											src='./assets/thumb.png'
											alt='Thumbnail'
											className='mx-auto md:mx-0 md:mt-20 w-full'
										/>
										<p className='mt-6 text-lg leading-8 text-white'>
											Com uma abordagem educativa e embasada na ciência. O
											objetivo é democratizar o conhecimento de forma acessível
											ao público geral, ajudando a esclarecer dúvidas e
											desmistificar conceitos relacionados à saúde preventiva,
											vacinação, epidemiologia, entre outros temas da
											atualidade.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							aria-hidden='true'
							className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
							<div
								style={{
									clipPath:
										"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
								}}
								className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
							/>
						</div>
					</div>
				</div>
			</AnimatedPage>
		</>
	)
}
