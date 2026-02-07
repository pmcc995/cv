import React from "react";
import Index from "./Index";

export { Page };

function Page() {
  return <Index />;
}

// Client-side render hook required by vite-plugin-ssr
// Removed client render hook; use global renderer.client.* for hydration
// export function render(pageContext: any) {
//   hydrateRoot(document.getElementById("root")!, <Page />);
// }
