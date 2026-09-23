import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Globo di particelle: porting React della card in public/card-glass-globe.html.
// Il canvas si adatta al contenitore, ruota lentamente e si ferma quando
// l'utente ha chiesto meno animazioni o quando esce dallo schermo.
const VIOLET: [number, number, number] = [124, 92, 250]
const MAGENTA: [number, number, number] = [224, 69, 123]

type P = { x: number; y: number; z: number; j: number }

export function ParticleGlobe({
  className,
  density = 6000,
  tilt = -0.32,
}: {
  className?: string
  density?: number
  tilt?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const pts: P[] = []
    for (let i = 0; i < density; i++) {
      const y = Math.random() * 2 - 1
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const t = Math.random() * Math.PI * 2
      pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r, j: Math.random() })
    }
    const dust: P[] = []
    for (let i = 0; i < 220; i++) {
      const y = Math.random() * 2 - 1
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const t = Math.random() * Math.PI * 2
      const k = 1.02 + Math.random() * 0.12
      dust.push({ x: Math.cos(t) * r * k, y: y * k, z: Math.sin(t) * r * k, j: Math.random() })
    }
    const arcs = [
      { a: [0.52, 0.18, 0.84], b: [-0.62, 0.55, 0.55], color: "rgba(124,92,250,0.85)", lift: 1.35 },
      { a: [0.12, -0.05, 0.99], b: [0.88, 0.42, 0.22], color: "rgba(224,69,123,0.85)", lift: 1.3 },
    ]

    let W = 0, H = 0, R = 0, cx = 0, cy = 0, raf = 0
    const mix = (a: number[], b: number[], t: number) =>
      a.map((v, i) => Math.round(v + (b[i] - v) * t))

    const rotate = (p: P, ang: number) => {
      const x = p.x * Math.cos(ang) + p.z * Math.sin(ang)
      const z = -p.x * Math.sin(ang) + p.z * Math.cos(ang)
      const y = p.y * Math.cos(tilt) - z * Math.sin(tilt)
      const z2 = p.y * Math.sin(tilt) + z * Math.cos(tilt)
      return { x, y, z: z2 }
    }
    const project = (v: { x: number; y: number; z: number }) => ({
      x: cx + v.x * R,
      y: cy - v.y * R,
      z: v.z,
    })

    const setSize = () => {
      const rect = wrap.getBoundingClientRect()
      W = rect.width
      H = rect.height
      canvas.width = Math.round(W * DPR)
      canvas.height = Math.round(H * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      R = Math.min(W * 0.46, H * 1.1)
      cx = W / 2
      cy = H * 0.97 + R * 0.06
      draw(performance.now())
    }

    function draw(now: number) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const ang = reduce ? 0.6 : (now / 1000) * 0.07
      if (!ctx || W === 0) return
      ctx.clearRect(0, 0, W, H)

      const halo = ctx.createRadialGradient(cx, cy - R * 0.25, R * 0.1, cx, cy, R)
      halo.addColorStop(0, "rgba(255,255,255,0.5)")
      halo.addColorStop(1, "rgba(124,92,250,0.05)")
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fill()

      for (const p of pts) {
        const v = rotate(p, ang)
        if (v.z < -0.05) continue
        const s = project(v)
        const depth = (v.z + 1) / 2
        const edge = Math.sqrt(v.x * v.x + v.y * v.y)
        const alpha = Math.min(1, 0.03 + Math.pow(edge, 3.2) * 1.15) * (0.3 + depth * 0.7)
        const tint = mix(VIOLET, MAGENTA, Math.min(1, Math.max(0, (s.x - cx) / (R * 1.25) + 0.35)))
        const r = (0.45 + p.j * 1.25) * (0.55 + Math.pow(edge, 2) * 0.9)
        ctx.beginPath()
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${tint[0]},${tint[1]},${tint[2]},${(alpha * 0.9).toFixed(3)})`
        ctx.fill()
      }

      for (const p of dust) {
        const v = rotate(p, ang)
        if (v.z < 0) continue
        const s = project(v)
        const tint = mix(VIOLET, MAGENTA, Math.min(1, Math.max(0, (s.x - cx) / (R * 1.25) + 0.35)))
        ctx.beginPath()
        ctx.arc(s.x, s.y, 0.5 + p.j, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${tint[0]},${tint[1]},${tint[2]},${(0.15 + p.j * 0.45).toFixed(3)})`
        ctx.fill()
      }

      for (const arc of arcs) {
        const A = project(rotate({ x: arc.a[0], y: arc.a[1], z: arc.a[2], j: 0 }, ang))
        const B = project(rotate({ x: arc.b[0], y: arc.b[1], z: arc.b[2], j: 0 }, ang))
        const mx = (A.x + B.x) / 2
        const my = (A.y + B.y) / 2
        ctx.beginPath()
        ctx.moveTo(A.x, A.y)
        ctx.quadraticCurveTo(
          cx + (mx - cx) * arc.lift,
          cy + (my - cy) * arc.lift - R * 0.18,
          B.x,
          B.y,
        )
        ctx.strokeStyle = arc.color
        ctx.lineWidth = 1.1
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(A.x, A.y, 4.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.95)"
        ctx.fill()
        ctx.lineWidth = 1.6
        ctx.strokeStyle = arc.color
        ctx.stroke()
      }
    }

    const loop = (now: number) => {
      draw(now)
      raf = requestAnimationFrame(loop)
    }

    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(wrap)

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const io = new IntersectionObserver(
      ([e]) => {
        if (reduce) return
        if (e.isIntersecting && !raf) raf = requestAnimationFrame(loop)
        else if (!e.isIntersecting && raf) {
          cancelAnimationFrame(raf)
          raf = 0
        }
      },
      { threshold: 0 },
    )
    io.observe(wrap)

    return () => {
      ro.disconnect()
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [density, tilt])

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />
    </div>
  )
}

export default ParticleGlobe
