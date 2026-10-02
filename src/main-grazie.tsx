import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import { initMetaEvents } from "@/lib/meta-events";
import ThankYou from "@/components/v3/thank-you";

// PostHog parte per primo, spento finché il banner cookie non dà il consenso
initAnalytics();
initMetaEvents();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>
);
