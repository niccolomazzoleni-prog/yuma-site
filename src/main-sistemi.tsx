import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SystemsCompare from "@/components/v3/systems-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SystemsCompare />
  </StrictMode>
);
