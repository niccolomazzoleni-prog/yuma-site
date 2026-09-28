import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionConfig } from "framer-motion";
import ProjectsLanding from "@/components/v3/landing-projects";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* rispetta "riduci animazioni" del sistema */}
    <MotionConfig reducedMotion="user">
      <ProjectsLanding />
    </MotionConfig>
  </StrictMode>
);
