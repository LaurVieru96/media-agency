import "./assets/styles/App.css";

import type React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
	const { i18n } = useTranslation();
	const languages: Record<string, { nativeName: string; key: string }> = {
		ro: {
			nativeName: "Română",
			key: "RO",
		},
		en: {
			nativeName: "English",
			key: "EN",
		},
	};

	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});
	const handleLanguageChange = (newLang: string) => {
		setSelectedLanguage(newLang);
		i18n.changeLanguage(newLang);
	};

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	// Apply theme on HTML and save in localStorage
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div
			data-theme={theme}
			className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white  duration-500"
		>
			<Navbar
				selectedLanguage={selectedLanguage}
				languages={languages}
				theme={theme}
				onLanguageChange={handleLanguageChange}
				toggleTheme={toggleTheme}
			/>
			<main className="flex-grow">
				<Routes>
					<Route path="/" element={<div>Home</div>} />
					<Route path="/prices" element={<div>Prices</div>} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
