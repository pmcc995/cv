import React from "react";
import Contact from "./Contact";

export { Page };

function Page() {
  return <Contact />;
}

import { hydrateRoot } from "react-dom/client";

// client render removed; hydration is handled by renderer.client.*
