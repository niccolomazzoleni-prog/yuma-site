import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionConfig } from "framer-motion";
import LandingV3 from "@/components/v3/landing";
import { clientInterfaceContent } from "@/lib/landing-content";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* rispetta "riduci animazioni" del sistema */}
    <MotionConfig reducedMotion="user">
      <LandingV3 content={clientInterfaceContent} />
    </MotionConfig>
  </StrictMode>
);
