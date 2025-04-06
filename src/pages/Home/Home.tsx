import type React from "react";
import { Trans } from "react-i18next";

import background from "../../assets/images/background.jpg";

const Home: React.FC = () => {
	return (
		<div>
			<div className="relative container mx-auto px-5 md:px-0 mt-30 md:mt-20">
				<div>
					<img
						className="w-full grayscale-75"
						src={background}
						alt="background"
					/>
				</div>

				<div className="md:absolute grid grid-cols-1 md:grid-cols-2 md:bottom-0 md:container md:p-10 mt-5 md:mt-0">
					<div className="hidden md:block" />

					<div className="flex flex-col gap-6 items-end justify-end">
						<div className="text-center md:text-right w-full">
							<p className="text-3xl sm:text-4xl md:text-5xl font-medium md:text-white">
								Discover what we can do for you
							</p>
						</div>

						<div className="font-medium text-center md:text-right w-full">
							<p>
								<Trans i18nKey={"home.starting_from"}>Starting from</Trans>€ 100
							</p>
						</div>

						<div className="bg-black dark:bg-white rounded-full text-white dark:text-black font-medium py-2.5 lg:py-3.5 px-5 lg:px-7 animate-pulse w-full md:w-auto text-center cursor-pointer">
							<button
								className="cursor-pointer flex flex-row justify-between items-center w-full"
								type="button"
							>
								<Trans i18nKey={"home.explore"}>Explore Projects</Trans>
								<svg
									className="arrow arrow--right w-5 h-5 fill-black dark:fill-white"
									viewBox="0 0 50 50"
									enableBackground="new 0 0 50 50"
									xmlSpace="preserve"
									fill="currentColor"
								>
									<title>Next</title>
									<path
										d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422C15.172,39.813,15.172,40.446,15.563,40.836z"
										fill="currentColor"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative container mx-auto px-5 md:px-0 mt-20 text-center">
				<h1 className="text-3xl font-bold mb-5">Shape Your Online Presence</h1>
				<p>
					Uncover the essence of your brand and stand out in the digital world
					with a unique and memorable identity.
				</p>
			</div>
		</div>
	);
};

export default Home;
