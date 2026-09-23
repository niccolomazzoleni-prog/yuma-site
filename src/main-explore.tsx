import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ExplorePage from "@/components/explore/explore-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExplorePage />
  </StrictMode>
);
