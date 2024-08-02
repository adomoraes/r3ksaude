import CardPlayer from "../CardPlayer"
import Footer from "../Footer"

export default function Cases() {
	return (
		<>
			<div className='bg-blue-950 min-h-screen'>
				<div className='mx-auto max-w-6xl py-20'>
					<h1 className='text-rose-600 text-6xl mb-10 lg:mb-0'>Cases</h1>
					<div className='flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 mt-10'>
						{/* <!-- Primeira Coluna, Primeira Linha --> */}
						<div className='relative lg:col-span-1 lg:w-full'>
							<img
								src='./assets/Cases1x1.png'
								alt='Image 1'
								className='w-full h-full object-cover'
							/>
						</div>
						{/* <!-- Segunda Coluna, Primeira Linha --> */}
						<div className='flex flex-col lg:col-span-3 lg:w-full'>
							<div className='relative'>
								<img
									src='./assets/Cases2x1.png'
									alt='Image 2'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='bg-rose-600 text-white p-4 flex-1 flex items-top space-x-4'>
								<h3 className='text-white text-2xl leading-6 tracking-tighter'>
									Lançamento da campanha Bye bye, Bronquiolite
								</h3>
								<p className='text-blue-950 w-[253.333333%]'>
									<strong>
										Em parceria com a farmacêutica AstraZeneca, desenvolvemos
										uma série especial para o lançamento da campanha "Bye bye,
										bronquiolite",
									</strong>{" "}
									que contou com o apoio da ONG Prematuridade e da Sociedade
									Brasileira de Pediatria. Além dos episódios gravados ao vivo,
									o projeto conta com mais 3 episódios que abordam de forma
									didática o que é a doença e medidas de prevenção contra o
									Vírus Sincicial Respiratório (VSR).
								</p>
							</div>
						</div>
						{/* <!-- Primeira Coluna, Segunda Linha --> */}
						<div className='relative lg:col-span-3 lg:w-full'>
							<img
								src='./assets/Cases1x2.png'
								alt='Image 3'
								className='w-full h-full object-cover'
							/>
						</div>
						{/* <!-- Segunda Coluna, Segunda Linha --> */}
						<div className='bg-blue-950 text-white p-4 flex-1 lg:col-span-1 lg:w-full'>
							<h3 className='text-white text-2xl leading-6 my-10'>
								No Dia Mundial das Doenças Raras
							</h3>
							<p>
								Convidamos Antoine Daher, fundador da Casa Hunter, que
								compartilhou suas experiências sobre a realidade dos pacientes e
								destacou a importância do trabalho de sua instituição, que busca
								garantir soluções para quem conviver com patologias raras.
							</p>
						</div>
					</div>
					<div className='container mx-auto py-20'>
						<div className='flex flex-wrap justify-around'>
							<CardPlayer
								title='Elisa Veeck'
								imgSrc='./assets/CardElisaVeeck.png'
								altText='CardElisaVeeck'
							/>
							<CardPlayer
								title='Mariana Ferrao'
								imgSrc='./assets/CardMarianaFerrao.png'
								altText='CardMarianaFerrao'
							/>
							<CardPlayer
								title='Natalia Ariede'
								imgSrc='./assets/CardNataliaAriede.png'
								altText='CardNataliaAriede'
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
