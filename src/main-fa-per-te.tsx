import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FitCompare from "@/components/v3/fit-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FitCompare />
  </StrictMode>
);
