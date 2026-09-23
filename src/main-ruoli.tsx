import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RolesCompare from "@/components/v3/roles-compare";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RolesCompare />
  </StrictMode>
);
