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
								className="w-8 h-8 fill-black dark:fill-white hover:animate-pulse"
								viewBox="0 0 254.532 254.532"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>logo</title>
								<path d="M127.267,0.001C57.092,0.001,0,57.091,0,127.266s57.092,127.266,127.267,127.266s127.266-57.091,127.266-127.266 S197.441,0.001,127.267,0.001z M38.646,158.994c0.138-0.014,0.273-0.023,0.411-0.038l48.101-5.039 c0.41-0.043,0.825-0.064,1.232-0.064c5.951,0,11.081,4.642,11.679,10.568l5.221,51.762c0.075,0.751,0.18,1.661,0.317,2.691 C74.501,211.521,49.312,188.691,38.646,158.994z M127.098,151.516c-13.393,0-24.249-10.857-24.249-24.249 c0-13.393,10.856-24.25,24.249-24.25s24.249,10.857,24.249,24.25C151.347,140.659,140.49,151.516,127.098,151.516z M148.926,218.874 c0.138-1.031,0.242-1.941,0.317-2.692l5.221-51.761c0.598-5.922,5.724-10.561,11.67-10.561c0.409,0,0.825,0.022,1.236,0.065 l47.764,5.022c0.249,0.026,0.495,0.045,0.743,0.069C205.209,188.703,180.025,211.523,148.926,218.874z M153.568,91.029 c-7.229-2.545-16.63-3.947-26.471-3.947s-19.242,1.401-26.471,3.947L34.01,114.485c6.256-45.878,45.69-81.347,93.257-81.347 c47.61,0,87.072,35.533,93.273,81.472L153.568,91.029z" />
							</svg>
						</NavLink>
					</p>
				</div>
				<div className="flex justify-center items-center">
					{/* Dark Mode Switcher */}
					<div className="mr-5 flex bg-gray-800 dark:bg-gray-900 rounded-full p-1">
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
					<div className="mr-5">
						<select
							value={selectedLanguage}
							onChange={handleChange}
							className="cursor-pointer transition-all duration-400 ease-in-out opacity-80 hover:opacity-100 hover:shadow-2xl hover:transform appearance-none bg-white border border-gray-300 rounded-2xl px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
						>
							{Object.keys(languages).map((lng) => (
								<option key={lng} value={lng}>
									{languages[lng].key}
								</option>
							))}
						</select>
					</div>
					<div className="bg-[#7c818d1a] rounded-[200px] py-3 px-7">
						<button
							type="button"
							className="text-lg text-dark dark:text-white dark:hover:text-[#b6bcc9]"
						>
							<NavLink to={"/"}>
								<Trans i18nKey={"navbar.home"}>Home</Trans>
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
