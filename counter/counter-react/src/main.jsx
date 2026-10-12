import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Find the root element in the HTMl
const container = document.getElementById("root");

// create a root
const root = createRoot(container);

// initial render
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
