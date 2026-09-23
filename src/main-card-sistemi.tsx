import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SystemsCardsCompare from "@/components/v3/systems-cards-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SystemsCardsCompare />
  </StrictMode>
);
