import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SolutionsPage from "@/components/v3/solutions-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SolutionsPage />
  </StrictMode>
);
