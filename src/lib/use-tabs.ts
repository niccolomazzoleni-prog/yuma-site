import { useId, useRef, type KeyboardEvent } from "react"

// Semantica e tastiera per gruppi di schede (pattern WAI-ARIA "tabs"):
// role tab/tabpanel, aria-selected, frecce, Home e Fine per spostarsi.
export function useTabs(count: number, active: number, setActive: (i: number) => void) {
  const prefix = useId()
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = -1
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % count
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + count) % count
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = count - 1
    if (next < 0) return
    e.preventDefault()
    setActive(next)
    refs.current[next]?.focus()
  }

  const tab = (i: number) => ({
    role: "tab" as const,
    id: `${prefix}-tab-${i}`,
    "aria-selected": i === active,
    "aria-controls": `${prefix}-panel`,
    tabIndex: i === active ? 0 : -1,
    ref: (el: HTMLButtonElement | null) => {
      refs.current[i] = el
    },
    onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => onKeyDown(e, i),
  })

  const panel = () => ({
    role: "tabpanel" as const,
    id: `${prefix}-panel`,
    "aria-labelledby": `${prefix}-tab-${active}`,
  })

  return { tab, panel }
}
