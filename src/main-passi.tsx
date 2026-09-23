import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StepsCompare from "@/components/v3/steps-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StepsCompare />
  </StrictMode>
);
