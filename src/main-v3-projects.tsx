import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { MotionConfig } from "framer-motion";
import ProjectsLanding from "@/components/v3/landing-projects";

// PostHog parte per primo, spento finché il banner cookie non dà il consenso
initAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* rispetta "riduci animazioni" del sistema */}
    <MotionConfig reducedMotion="user">
      <ProjectsLanding />
    </MotionConfig>
  </StrictMode>
);
