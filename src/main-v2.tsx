import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import V2Home from "@/components/v2/v2-home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <V2Home />
  </StrictMode>
);
