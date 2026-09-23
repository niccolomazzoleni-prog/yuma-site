import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProjectsLanding from "@/components/v3/landing-projects";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectsLanding />
  </StrictMode>
);
