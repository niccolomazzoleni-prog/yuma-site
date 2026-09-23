import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProblemCompare from "@/components/v3/problem-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProblemCompare />
  </StrictMode>
);
