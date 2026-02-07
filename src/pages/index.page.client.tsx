import React from "react";
import { hydrateRoot } from "react-dom/client";

export function render(pageContext: any) {
  const { Page, pageProps } = pageContext as any;
  hydrateRoot(document.getElementById("root")!, React.createElement(Page, pageProps));
}
