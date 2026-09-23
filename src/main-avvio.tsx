import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AssessmentCompare from "@/components/v3/assessment-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AssessmentCompare />
  </StrictMode>
);
