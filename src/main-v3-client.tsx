import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingV3 from "@/components/v3/landing";
import { clientInterfaceContent } from "@/lib/landing-content";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingV3 content={clientInterfaceContent} />
  </StrictMode>
);
