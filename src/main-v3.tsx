import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { initMetaEvents } from "@/lib/meta-events";
import { MotionConfig } from "framer-motion";
import V3Home from "@/components/v3/v3-home";

// PostHog parte per primo, spento finché il banner cookie non dà il consenso
initAnalytics();
initMetaEvents();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* rispetta "riduci animazioni" del sistema */}
    <MotionConfig reducedMotion="user">
      <V3Home />
    </MotionConfig>
  </StrictMode>
);
