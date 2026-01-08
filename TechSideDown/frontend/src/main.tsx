import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Console credit
console.log(
  "%cDeveloped by skar777123 & dev-harshhh19",
  "color: #ef4444; font-size: 12px; font-weight: bold; text-shadow: 0 0 1px rgba(239,68,68,0.5);"
);

createRoot(document.getElementById("root")!).render(<App />);
