import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StoryCompare from "@/components/v3/story-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoryCompare />
  </StrictMode>
);
