import React from "react";
import { hydrateRoot } from "react-dom/client";
import { createPageRenderer } from "vite-plugin-ssr/client";
import "./index.css";

export { render };

const { render } = createPageRenderer({
	render(pageContext) {
		// pageContext contains { Page, pageProps }
		const { Page, pageProps } = pageContext as any;
		hydrateRoot(document.getElementById("root")!, React.createElement(Page, pageProps));
	},
});
