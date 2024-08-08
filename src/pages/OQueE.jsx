import AnimatedPage from "../components/AnimatedPage"
import Footer from "../Footer"

export default function OQueE() {
	return (
		<>
			<AnimatedPage>
				<div className='bg-rose-600 min-h-screen'>
					<div className='bg-[url("./assets/bgHeroMic.png")] 2xl:bg-contain 2xl:min-h-screen md:bg-auto bg-[length:20%] bg-bottom relative isolate px-6 pt-14 lg:px-8 h-full overflow-hidden bg-no-repeat'>
						<div className='mx-auto max-w-6xl py-10 pb-36 2xl:max-w-7xl 2xl:py-14 2xl:pb-40'>
							<div className='flex flex-col md:flex-row'>
								<div className='md:basis-3/5 p-4 2xl:basis-2/3'>
									<div className='text-left'>
										<img
											src='./assets/logo.png'
											alt='Logo'
											className='mx-auto md:mx-0'
										/>
										<h1 className='md:absolute md:block md:w-[auto] lg:w-[160%] md:bottom-[5%] order-2 md:order-1 open-sans-800 mt-6 text-5xl font-bold tracking-tight text-white md:text-[5rem] lg:text-[7.25rem] md:leading-[4.5rem] lg:leading-[5.5rem] 2xl:text-[8rem] 2xl:leading-[6rem]'>
											Sua saúde, <br />
											nossa especialidade.
										</h1>
										<p className='order-1 md:order-2 mt-6 text-lg leading-8 text-white w-4/5 2xl:text-2xl 2xl:leading-9 2xl:w-1/2'>
											<strong>
												O R3K nasceu em outubro de 2023, do desejo dos médicos
												Renato Kfouri e Rosana Richtmann
											</strong>{" "}
											de fornecer informações atualizadas e confiáveis à
											população sobre saúde.
										</p>
									</div>
								</div>
								<div className='md:basis-2/5 p-4 2xl:basis-1/3'>
									<div className='text-left'>
										<img
											src='./assets/thumb.png'
											alt='Thumbnail'
											className='mx-auto md:mx-0 md:mt-20 w-full'
										/>
										<p className='mt-6 text-lg leading-8 text-white 2xl:text-xl 2xl:leading-9'>
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
					</div>
				</div>
			</AnimatedPage>
			<Footer />
		</>
	)
}
