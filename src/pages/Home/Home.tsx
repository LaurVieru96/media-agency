import type React from "react";
import { Trans } from "react-i18next";

import background from "../../assets/images/background.jpg";

const Home: React.FC = () => {
	return (
		<div className="font-sans text-gray-800 dark:text-gray-200">
			{/* Hero Section */}
			<div className="relative container mx-auto px-5 md:px-0 mt-30 md:mt-20">
				<div className="overflow-hidden rounded-xl">
					<img
						className="w-full mx-auto grayscale-75 hover:grayscale-0 transition-all duration-500"
						src={background}
						alt="background"
					/>
				</div>

				<div className="md:absolute grid grid-cols-1 md:grid-cols-2 md:bottom-0 md:container md:p-10 mt-5 md:mt-0">
					<div className="hidden md:block" />

					<div className="flex flex-col gap-6 items-end justify-end">
						<div className="text-center md:text-right w-full">
							<p className="text-3xl sm:text-4xl md:text-5xl font-medium md:text-white drop-shadow-lg">
								Discover what we can do for you
							</p>
						</div>

						<div className="font-medium text-center md:text-right w-full">
							<p className="md:text-white md:drop-shadow-lg">
								<Trans i18nKey={"home.starting_from"}>Starting from</Trans>€ 100
							</p>
						</div>

						<div className="bg-black dark:bg-white rounded-full text-white dark:text-black font-medium py-2.5 lg:py-3.5 px-5 lg:px-7 hover:bg-opacity-90 hover:scale-105 transition-all w-full md:w-auto text-center">
							<button
								className="cursor-pointer flex flex-row justify-between items-center w-full"
								type="button"
							>
								<Trans i18nKey={"home.explore"}>Explore Projects</Trans>
								<svg
									className="arrow arrow--right w-5 h-5 fill-white dark:fill-black ml-2"
									viewBox="0 0 50 50"
									enableBackground="new 0 0 50 50"
									xmlSpace="preserve"
								>
									<title>Next</title>
									<path
										d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422C15.172,39.813,15.172,40.446,15.563,40.836z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Intro Section */}
			<div className="relative container mx-auto px-5 md:px-0 mt-20 text-center">
				<h1 className="text-3xl font-bold mb-5 relative inline-block">
					Shape Your Online Presence
					<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black dark:bg-white"></span>
				</h1>
				<p className="max-w-2xl mx-auto text-lg mt-8">
					Uncover the essence of your brand and stand out in the digital world
					with a unique and memorable identity.
				</p>
			</div>

			{/* Portfolio Examples */}
			<div className="container mx-auto px-5 md:px-0 py-20">
				<h2 className="text-3xl font-bold mb-12 text-center relative inline-block">
					Our Recent Projects
					<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black dark:bg-white"></span>
				</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Example 1 */}
					<div className="overflow-hidden rounded-xl group relative">
						<div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative">
							<img src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2610&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="E-commerce Website" className="object-cover w-full h-full" />
							<div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
								<div className="text-white text-center p-4">
									<h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
									<p>Custom shopping experience with seamless checkout</p>
								</div>
							</div>
						</div>
					</div>
					
					{/* Example 2 */}
					<div className="overflow-hidden rounded-xl group relative">
						<div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
							<img src="https://images.unsplash.com/photo-1642142785744-261a5f663d12?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Corporate Website" className="object-cover w-full h-full" />
							<div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
								<div className="text-white text-center p-4">
									<h3 className="text-xl font-bold mb-2">Corporate Website</h3>
									<p>Sleek, professional web presence for a financial firm</p>
								</div>
							</div>
						</div>
					</div>
					
					{/* Example 3 */}
					<div className="overflow-hidden rounded-xl group relative">
						<div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
							<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Web Application" className="object-cover w-full h-full" />
							<div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
								<div className="text-white text-center p-4">
									<h3 className="text-xl font-bold mb-2">Web Application</h3>
									<p>Feature-rich dashboard for data analytics and reporting</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Who We Are Section */}
			<div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 mt-12">
				<div className="container mx-auto px-5 md:px-0">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-6 relative inline-block">
							Cine Suntem Noi?
							<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black dark:bg-white"></span>
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
							<div className="rounded-xl overflow-hidden shadow-xl">
								<img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Team" className="w-full h-full object-cover" />
							</div>
							
							<div className="text-left">
								<p className="text-lg mb-6">
									Suntem o echipă pasionată formată din doi developeri talentați - unul specializat 
									în frontend și celălalt în backend. Ne-am unit forțele pentru a ne transforma 
									pasiunea pentru dezvoltarea web într-un vis împlinit.
								</p>
								<p className="text-lg mb-8">
									Oferim soluții digitale care transformă ideile clienților noștri în realitate, 
									cu focus pe calitate, inovație și experiență utilizator impecabilă.
								</p>
								<button type="button" className="bg-black dark:bg-white text-white dark:text-black rounded-full font-medium py-3 px-8 hover:scale-105 hover:shadow-lg transition-all flex items-center">
									Contactează-ne
									<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Services Section */}
			<div className="container mx-auto px-5 md:px-0 py-24">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-3 relative inline-block">
						Serviciile Noastre
						<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black dark:bg-white"></span>
					</h2>
					<p className="text-lg mt-6 max-w-2xl mx-auto">Soluții complete pentru prezența ta online</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
					<div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
						<div className="text-center mb-6">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black dark:bg-white mb-6">
								<svg className="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
							<p className="mb-6">
								Creăm interfețe moderne și intuitive, perfect funcționale pe toate 
								dispozitivele. Designul nostru se concentrează pe experiența utilizatorului
								și pe identitatea brandului tău.
							</p>
							<div className="mt-8">
								<img src="https://images.unsplash.com/photo-1642132652860-471b4228023e?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Frontend Development" className="w-full rounded-lg shadow-md" />
							</div>
						</div>
					</div>
					
					<div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
						<div className="text-center mb-6">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black dark:bg-white mb-6">
								<svg className="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-4">Backend Development</h3>
							<p className="mb-6">
								Dezvoltăm sisteme robuste și securizate pentru funcționalitate și performanță optimă.
								Arhitecturile noastre backend sunt scalabile și optimizate pentru viteza de răspuns.
							</p>
							<div className="mt-8">
								<img src="https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Backend Development" className="w-full rounded-lg shadow-md" />
							</div>
						</div>
					</div>
				</div>
				
				<div className="bg-gradient-to-r from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 md:p-12 shadow-xl text-white mt-16">
					<div className="text-center">
						<h3 className="text-2xl font-bold mb-6">Web Development Complet</h3>
						<p className="mb-6 max-w-3xl mx-auto">
							Oferim servicii complete de dezvoltare web, de la concept la implementare.
							De la site-uri de prezentare la platforme web complexe, transformăm viziunea ta 
							într-o experiență digitală deosebită care aduce valoare reală afacerii tale.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
							<div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
								<div className="text-xl font-semibold mb-2">Design</div>
								<p>Creat pentru a reflecta identitatea brandului tău și pentru a atrage clienții</p>
							</div>
							<div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
								<div className="text-xl font-semibold mb-2">Funcționalitate</div>
								<p>Sisteme eficiente și intuitive care îți ușurează activitatea zilnică</p>
							</div>
							<div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
								<div className="text-xl font-semibold mb-2">Performanță</div>
								<p>Optimizat pentru viteză și experiență perfectă pe orice dispozitiv</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Agency Brand Section */}
			<div className="bg-black text-white py-24 text-center">
				<div className="container mx-auto px-5 md:px-0">
					<h2 className="text-5xl md:text-6xl font-bold mb-3">Dev Union Agency</h2>
					<p className="text-xl mt-4 opacity-80">Since 2025</p>
					
					<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="flex flex-col items-center">
							<div className="text-4xl font-bold mb-2">30+</div>
							<p className="opacity-80">Proiecte Finalizate</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-4xl font-bold mb-2">50+</div>
							<p className="opacity-80">Clienți Mulțumiți</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="text-4xl font-bold mb-2">5000+</div>
							<p className="opacity-80">Ore de Dezvoltare</p>
						</div>
					</div>
					
					{/* <div className="mt-16">
						<img src="/api/placeholder/1200/300" alt="Agency Projects Showcase" className="w-full rounded-xl" />
					</div> */}
				</div>
			</div>

			{/* Pricing Section */}
			<div className="container mx-auto px-5 md:px-0 py-24">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-3 relative inline-block">
						Prețuri și Pachete
						<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black dark:bg-white"></span>
					</h2>
					<p className="text-lg mt-6 max-w-2xl mx-auto">Soluții adaptate pentru fiecare nevoie și buget</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
					{/* Maintenance Package */}
					<div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow relative overflow-hidden group">
						<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
						<h3 className="text-xl font-bold mb-3">Mentenanță Website</h3>
						<p className="text-3xl font-bold mb-6">300€<span className="text-sm font-normal"> / lună</span></p>
						<ul className="mb-8 flex-grow space-y-3">
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Actualizări de securitate
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Backup-uri săptămânale
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Monitorizare performanță
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Suport tehnic prioritar
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Rapoarte lunare de performanță
							</li>
						</ul>
						<button type="button" className="mt-auto bg-black dark:bg-white text-white dark:text-black rounded-full font-medium py-3 px-6 hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center">
							Solicită ofertă
							<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
							</svg>
						</button>
					</div>

					{/* Presentation Website Package */}
					<div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow relative overflow-hidden group">
						<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
						<h3 className="text-xl font-bold mb-3">Site de Prezentare</h3>
						<p className="text-3xl font-bold mb-6">1000€</p>
						<ul className="mb-8 flex-grow space-y-3">
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Design personalizat premium
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Adaptare pentru toate dispozitivele
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Optimizare SEO completă
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Integrare social media
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Formular de contact & Analytics
							</li>
						</ul>
						<button type="button" className="mt-auto bg-black dark:bg-white text-white dark:text-black rounded-full font-medium py-3 px-6 hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center">
							Solicită ofertă
							<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
							</svg>
						</button>
					</div>

					{/* Online Shop Package */}
					<div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow relative overflow-hidden group">
						<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
						<div className="absolute -right-12 -top-12 bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-1 px-12 transform rotate-45">
							Popular
						</div>
						<h3 className="text-xl font-bold mb-3">Magazin Online</h3>
						<p className="text-3xl font-bold mb-6">2000€</p>
						<ul className="mb-8 flex-grow space-y-3">
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Sistem de produse complet
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Coș de cumpărături avansat
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Integrare multiple metode plată
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Panou de administrare complet
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Sistem de discount și cupoane
							</li>
						</ul>
						<button type="button" className="mt-auto bg-black dark:bg-white text-white dark:text-black rounded-full font-medium py-3 px-6 hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center">
							Solicită ofertă
							<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
							</svg>
						</button>
					</div>

					{/* Web Platform Package */}
					<div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow relative overflow-hidden group">
						<div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
							<h3 className="text-2xl font-bold text-white">Web Platform Package</h3>
						</div>
						<h3 className="text-2xl font-bold mb-4">Web Platform Package</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-4">
							Pacchetul de platformă web oferă o soluție completa pentru dezvoltarea site-urilor web.
						</p>
						<ul className="text-gray-600 dark:text-gray-400 mb-8">
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Sistem de produse complet
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>	
								Integrare multiple metode plată
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Actualizări de securitate
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Backup-uri săptămânale
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Monitorizare performanță
							</li>
							<li className="flex items-start">		
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Suport tehnic prioritar
							</li>
							<li className="flex items-start">
								<svg className="w-5 h-5 mr-2 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<title>{""}</title><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
								</svg>
								Rapoarte lunare de performanță
							</li>
						</ul>
					</div>
					{/* <div className="w-full md:w-1/2">
						<img src={Image} alt="Image" className="w-full" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Home;