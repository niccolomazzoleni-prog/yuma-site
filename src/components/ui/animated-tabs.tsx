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
}

// Schede animate (21st.dev): la pillola attiva scorre con layoutId, il pannello
// entra con una sfocatura. Qui senza contenuti di esempio: le schede arrivano
// sempre da chi la usa.
const AnimatedTabs = ({
  tabs,
  defaultTab,
  className,
  panelClassName,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("flex w-full flex-col gap-y-2", className)}>
      <div className="flex flex-wrap gap-2 rounded-xl bg-[#11111198] bg-opacity-50 p-1 backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            aria-current={activeTab === tab.id}
            className="relative rounded-lg px-3 py-1.5 text-sm font-medium text-white outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 !rounded-lg bg-[#111111d1] bg-opacity-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div
        className={cn(
          "h-full min-h-60 rounded-xl border border-white/10 bg-[#11111198] bg-opacity-50 p-4 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm",
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
