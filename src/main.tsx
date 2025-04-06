import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./assets/styles/index.css";

import "../i18n";

const root = document.getElementById("root");

if (root) {
	ReactDOM.createRoot(root).render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	);
} else {
	console.error("Root element not found!");
}
