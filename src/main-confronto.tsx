import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ComparePage from "@/components/v3/compare-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ComparePage />
  </StrictMode>
);
