import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "@/components/landing/landing-page";
import { clientInterfaceContent } from "@/lib/landing-content";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage content={clientInterfaceContent} />
  </StrictMode>
);
