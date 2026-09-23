"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  panelClassName?: string;
  /** "dark" è la variante originale di 21st, "glass" è il vetro chiaro YUMA */
  tone?: "dark" | "glass";
}

// Schede animate (21st.dev): la pillola attiva scorre con layoutId, il pannello
// entra con una sfocatura. Qui senza contenuti di esempio: le schede arrivano
// sempre da chi la usa.
const AnimatedTabs = ({
  tabs,
  defaultTab,
  className,
  panelClassName,
  tone = "dark",
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  const glass = tone === "glass";
  const barClass = glass
    ? "bg-white/35 border border-white/60 backdrop-blur-xl"
    : "bg-[#11111198] bg-opacity-50 backdrop-blur-sm";
  const tabTextClass = glass ? "text-[#4A4A58]" : "text-white";
  const activePillClass = glass
    ? "bg-white/80 shadow-[0_10px_30px_-18px_rgba(1,1,16,0.5)] backdrop-blur-sm"
    : "bg-[#111111d1] bg-opacity-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm";
  const activeTextClass = glass ? "text-[#010110]" : "text-white";
  const panelBaseClass = glass
    ? "border border-white/65 bg-white/45 text-[#010110] shadow-[0_40px_90px_-45px_rgba(1,1,16,0.35)] backdrop-blur-2xl"
    : "border border-white/10 bg-[#11111198] bg-opacity-50 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm";

  return (
    <div className={cn("flex w-full flex-col gap-y-2", className)}>
      <div className={cn("flex flex-wrap gap-2 rounded-xl p-1", barClass)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            aria-current={activeTab === tab.id}
            className={cn(
              "relative rounded-lg px-3 py-1.5 text-sm font-medium outline-none transition-colors focus-visible:ring-2",
              activeTab === tab.id ? activeTextClass : tabTextClass,
              glass ? "focus-visible:ring-[#7C5CFA]/60" : "focus-visible:ring-white/60",
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className={cn("absolute inset-0 !rounded-lg", activePillClass)}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div
        className={cn(
          "h-full min-h-60 rounded-[20px] p-4",
          panelBaseClass,
          panelClassName,
        )}
      >
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "circInOut", type: "spring" }}
                className="h-full"
              >
                {tab.content}
              </motion.div>
            ),
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
export type { Tab as AnimatedTab };
