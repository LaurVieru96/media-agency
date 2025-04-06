import type React from "react";
import { Trans } from "react-i18next";

const Footer: React.FC = () => {
	return (
		<footer className="w-full mt-10 z-20 p-5 md:p-0">
			<div className="container mx-auto dark:bg-[#090a0c] rounded-md shadow-sm">
				<div className="flex flex-col md:flex-row justify-between items-start p-5 md:p-10 rounded-md">
					<div className="mb-8 md:mb-0">
						<div className="flex items-center mb-4">
							<span className="text-2xl font-bold">Dev Union Media</span>
						</div>
						<p className="text-gray-400 max-w-xs">
							Dezvoltăm site-uri web moderne și oferim servicii de mentenanță,
							optimizare și suport tehnic. Frontend și backend, de la idee la
							implementare.
						</p>
						<div className="flex space-x-4 mt-6">
							<a
								href="https://www.facebook.com/"
								className="dark:text-white text-black  hover:text-gray-400"
							>
								<i className="fab fa-facebook-f" />
							</a>
							<a
								href="https://twitter.com/"
								className="dark:text-white text-black hover:text-gray-400"
							>
								<i className="fab fa-twitter" />
							</a>
							<a
								href="https://www.instagram.com/"
								className="dark:text-white text-black hover:text-gray-400"
							>
								<i className="fab fa-instagram" />
							</a>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-6">
							<Trans i18nKey="footer.contact_title">Contact us</Trans>
						</h3>
						<div className="flex flex-col space-y-4">
							<div className="flex items-center">
								<i className="far fa-envelope mr-2" />
								<div>
									<p className="text-gray-400">
										<Trans i18nKey="footer.send_email">Send us an email</Trans>
									</p>
									<a
										href="mailto:contact@motorflow.com"
										className="hover:text-gray-400"
									>
										contact@devunion-media.ro
									</a>
								</div>
							</div>
							<div className="flex items-center">
								<i className="fas fa-phone-alt mr-2" />
								<div>
									<p className="text-gray-400">
										<Trans i18nKey="footer.give_call">Give us a call</Trans>
									</p>
									<a href="tel:0753810012" className="hover:text-gray-400">
										0753810012
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="my-12 pt-4 border-gray-800 text-center text-gray-500 text-sm">
				<p>
					Copyright ©{" "}
					<span className="text-dark dark:text-white">DevUnion Media</span> |
					Designed by{" "}
					<a href="/" className="text-dark dark:text-white">
						DevUnion Media
					</a>{" "}
					- Powered by{" "}
					<a href="/" className="text-dark dark:text-white">
						DevUnion Media
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
