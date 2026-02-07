import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { render };

async function render(pageContext: { url: string }) {
  // Provide the current URL to the app for server-side routing
  // App will read globalThis.__SSR_URL__ to configure MemoryRouter
  (globalThis as any).__SSR_URL__ = pageContext.url;

  const appHtml = renderToString(<App />);

  return {
    // `documentHtml` is the HTML for the <body> (without <html>/<body>),
    // vite-plugin-ssr will inject it into the page template.
    documentHtml: appHtml,
  };
}
