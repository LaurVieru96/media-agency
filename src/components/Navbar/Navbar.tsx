import type React from "react";
import { NavLink } from "react-router";
import { Trans } from "react-i18next";

interface NavbarProps {
	selectedLanguage: string;
	languages: Record<string, { nativeName: string; key: string }>;
	theme: string;
	onLanguageChange: (lang: string) => void;
	toggleTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
	selectedLanguage,
	languages,
	theme,
	onLanguageChange,
	toggleTheme,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLang = e.target.value;
		onLanguageChange(newLang);
	};

	return (
		<nav className="fixed w-full bg-white dark:bg-black p-5 z-20 shadow-2xl">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center">
					<p className="text-xl font-medium">
						<NavLink to="/">
							<svg
								viewBox="0 0 1024 1024"
								className="w-8 h-8 fill-black dark:fill-white hover:animate-pulse"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>logo</title>
								<path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" />
							</svg>
						</NavLink>
					</p>
				</div>
				<div className="flex justify-center items-center">
					{/* Dark Mode Switcher */}
					<div className="mr-2 md:mr-5 flex bg-gray-800 dark:bg-gray-900 rounded-full p-1">
						<button
							type="button"
							onClick={() => toggleTheme("light")}
							className={`p-1.5 rounded-full transition-colors cursor-pointer ${
								theme === "light"
									? "bg-white text-yellow-500"
									: "text-gray-400 hover:text-white"
							}`}
							aria-label="Light mode"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>sun</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						</button>
						<button
							type="button"
							onClick={() => toggleTheme("dark")}
							className={`p-1.5 rounded-full transition-colors cursor-pointer ${
								theme === "dark"
									? "bg-gray-700 text-white"
									: "text-gray-400 hover:text-white"
							}`}
							aria-label="Dark mode"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>moon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						</button>
					</div>
					{/* Language Switcher */}
					<div className="mr-2 md:mr-5">
						<select
							value={selectedLanguage}
							onChange={handleChange}
							className="cursor-pointer transition-all duration-400 ease-in-out opacity-80 hover:opacity-100 hover:shadow-2xl hover:transform appearance-none bg-white border border-gray-300 rounded-2xl  px-3 py-1 md:px-4 md:py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
						>
							{Object.keys(languages).map((lng) => (
								<option key={lng} value={lng}>
									{languages[lng].key}
								</option>
							))}
						</select>
					</div>
					{/* <div className="bg-[#7c818d1a] rounded-[200px] py-2 px-5 md:py-3 md:px-7">
						<button
							type="button"
							className="text-base md:text-lg text-dark dark:text-white dark:hover:text-[#b6bcc9]"
						>
							<NavLink to={"/"}>
								<Trans i18nKey={"navbar.home"}>Home</Trans>
							</NavLink>
						</button>
					</div> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
