import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// Primitive della versione 2 (linguaggio visivo tipo privy.io): bande alternate
// chiaro/scuro a tutta larghezza, trama a crocette sul chiaro, card squadrate.

export const V2 = {
  ink: "#010110", // testo e fondo delle bande scure
  band: "#0A0A0F",
  card: "#22222A",
  paper: "#FFFFFF",
  mist: "#F4F4F6",
  line: "#E6E6EA",
  muted: "#6B6B76",
  accent: "#7C5CFA",
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode
  tone?: "light" | "dark"
}) {
  return (
    <p
      className={cn(
        "text-[12px] font-medium uppercase tracking-[0.14em]",
        tone === "dark" ? "text-white/45" : "text-[#6B6B76]",
      )}
    >
      {children}
    </p>
  )
}

// Titolo di sezione: 56px, peso normale, lettere strette (come le h2 di privy).
export function SectionTitle({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-balance text-[34px] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[44px] md:text-[56px]",
        tone === "dark" ? "text-white" : "text-[#010110]",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function Lead({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <p
      className={cn(
        "text-[17px] leading-[1.6] md:text-[19px]",
        tone === "dark" ? "text-white/60" : "text-[#6B6B76]",
        className,
      )}
    >
      {children}
    </p>
  )
}

// Trama a crocette del fondo chiaro.
export function TickGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(1,1,16,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,1,16,0.10) 1px, transparent 1px)",
        backgroundSize: "9px 64px, 64px 9px",
        backgroundPosition: "center",
        maskImage:
          "radial-gradient(120% 90% at 50% 40%, rgba(0,0,0,0.9), rgba(0,0,0,0))",
        WebkitMaskImage:
          "radial-gradient(120% 90% at 50% 40%, rgba(0,0,0,0.9), rgba(0,0,0,0))",
      }}
    />
  )
}

export function Band({
  id,
  tone = "light",
  children,
  className,
  ticks = false,
}: {
  id?: string
  tone?: "light" | "dark" | "mist"
  children: ReactNode
  className?: string
  ticks?: boolean
}) {
  const bg =
    tone === "dark"
      ? "bg-[#0A0A0F] text-white"
      : tone === "mist"
        ? "bg-[#F4F4F6] text-[#010110]"
        : "bg-white text-[#010110]"
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden [scroll-margin-top:72px]", bg, className)}
    >
      {ticks ? <TickGrid /> : null}
      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-24 md:px-10 md:py-32">
        {children}
      </div>
    </section>
  )
}

export function Card({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode
  tone?: "dark" | "light"
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-[8px] p-9",
        tone === "dark"
          ? "bg-[#22222A] text-white"
          : "border border-[#E6E6EA] bg-white text-[#010110]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string
  children: ReactNode
  variant?: "primary" | "ghost" | "light"
  className?: string
}) {
  const styles = {
    primary:
      "bg-[#010110] text-white hover:bg-[#22222A]",
    light: "bg-white text-[#010110] hover:bg-white/90",
    ghost:
      "border border-[#E6E6EA] bg-white text-[#010110] hover:border-[#010110]",
  }[variant]
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[6px] px-5 py-3 text-[15px] font-medium transition-colors duration-200",
        styles,
        className,
      )}
    >
      {children}
    </a>
  )
}
