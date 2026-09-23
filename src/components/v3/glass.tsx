import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

// Primitive della direzione "vetro su gradiente viola".

export const GLASS =
  "rounded-[28px] border border-white/65 bg-white/45 backdrop-blur-2xl"

export const GLASS_SHADOW: CSSProperties = {
  boxShadow:
    "0 40px 90px -45px rgba(1,1,16,0.35), inset 0 1px 0 rgba(255,255,255,0.85)",
}

export function GradientField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(55% 45% at 12% 12%, rgba(124,92,250,0.55), rgba(124,92,250,0) 70%), radial-gradient(50% 45% at 88% 30%, rgba(224,69,123,0.35), rgba(224,69,123,0) 70%), radial-gradient(60% 50% at 50% 95%, rgba(124,92,250,0.35), rgba(124,92,250,0) 70%), #F7F7FB",
      }}
    />
  )
}

export function Glass({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn(GLASS, className)} style={GLASS_SHADOW}>
      {children}
    </div>
  )
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-[1180px] px-5 py-20 md:py-28 [scroll-margin-top:96px]", className)}
    >
      {children}
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#7C5CFA]">
      {children}
    </p>
  )
}

export function Title({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-balance text-[30px] font-medium leading-[1.05] tracking-[-0.035em] text-[#010110] md:text-[44px]",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function Lead({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-[16px] leading-[1.5] text-[#4A4A58] md:text-[18px]", className)}>
      {children}
    </p>
  )
}

export function Body({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-[16px] leading-[1.55] text-[#4A4A58]", className)}>
      {children}
    </p>
  )
}
