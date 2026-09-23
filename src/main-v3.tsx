import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import V3Home from "@/components/v3/v3-home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <V3Home />
  </StrictMode>
);
