import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FontPage from "@/components/v3/font-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FontPage />
  </StrictMode>
);
