import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionConfig } from "framer-motion";
import V3Home from "@/components/v3/v3-home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* rispetta "riduci animazioni" del sistema */}
    <MotionConfig reducedMotion="user">
      <V3Home />
    </MotionConfig>
  </StrictMode>
);
