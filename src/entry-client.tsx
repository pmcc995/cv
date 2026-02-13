import React from "react";
import { hydrateRoot } from "react-dom/client";
import { getPageContext } from "vite-plugin-ssr/client";
import App from "./App";
import "./index.css";

export { render };

async function render() {
	const pageContext = await getPageContext();
	hydrate(pageContext);
}

function hydrate(pageContext: any) {
	hydrateRoot(
		document.getElementById("root")!,
		React.createElement(App)
	);
}
