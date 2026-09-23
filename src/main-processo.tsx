import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProcessCompare from "@/components/v3/process-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProcessCompare />
  </StrictMode>
);
