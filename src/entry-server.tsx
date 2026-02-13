import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { render };

async function render(pageContext: { url: string, urlOriginal: string }) {
	const appHtml = renderToString(
		React.createElement(App)
	);

	return {
		documentHtml: appHtml,
	};
}
