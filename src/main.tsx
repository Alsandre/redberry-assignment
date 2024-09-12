import { createRoot } from "react-dom/client";

import "@fontsource/firago/400.css";
import "@fontsource/firago/500.css";
import "@fontsource/firago/700.css";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
