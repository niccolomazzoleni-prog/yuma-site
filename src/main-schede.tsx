import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CardsCompare from "@/components/v3/cards-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardsCompare />
  </StrictMode>
);
