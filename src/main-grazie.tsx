import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initAnalytics } from "@/lib/analytics";
import ThankYou from "@/components/v3/thank-you";

// PostHog parte per primo, spento finché il banner cookie non dà il consenso
initAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>
);
