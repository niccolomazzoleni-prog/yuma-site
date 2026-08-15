import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  as?: "div" | "article" | "section" | "figure"
  className?: string
  style?: CSSProperties
  distance?: number
  duration?: number
  easing?: string
  threshold?: number
}

// Fade-in + translateY, once (unobserve after trigger). Respects
// prefers-reduced-motion: reduce (renders instantly, no transition).
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  style,
  distance = 16,
  duration = 500,
  easing = "ease-out",
  threshold = 0.3,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)
  const [instant, setInstant] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true)
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(el)
          }
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  const motionStyle: CSSProperties = instant
    ? {}
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${distance}px)`,
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
        transitionDelay: `${delay}ms`,
      }

  const Tag = as as unknown as "div"
  return (
    <Tag ref={ref as never} className={className} style={{ ...motionStyle, ...style }}>
      {children}
    </Tag>
  )
}
