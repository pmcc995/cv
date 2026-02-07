import React from "react";
import { hydrateRoot } from "react-dom/client";
import { createPageRenderer } from "vite-plugin-ssr/client";

const { render } = createPageRenderer({
	render(pageContext) {
		const { Page, pageProps } = pageContext as any;
		hydrateRoot(document.getElementById("root")!, React.createElement(Page, pageProps));
	},
});

export { render };
