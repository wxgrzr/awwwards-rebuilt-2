import { useEffect, useRef, useState } from "react"

// Scroll-reveal trigger used by the home page sections.
//
// We deliberately avoid IntersectionObserver's `rootMargin` here: Safari
// (iOS/iPadOS) computes negative/percentage root margins inconsistently across
// viewport sizes, which left below-the-fold text stuck at opacity 0 on some
// phone and tablet sizes. A direct getBoundingClientRect check on scroll/resize
// behaves identically in every browser and can never get "stuck" hidden.
//
// `offset` is the fraction of the viewport height at which an element reveals
// as it rises into view (0.85 ≈ reveal once the top is within the lower 15% of
// the viewport, matching the previous "reveal slightly after entering" feel).
export const useReveal = (offset = 0.85) => {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (revealed) return undefined

    const check = () => {
      const node = ref.current
      if (!node) return
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight
      if (node.getBoundingClientRect().top < viewportHeight * offset) {
        setRevealed(true)
      }
    }

    // Run once in case the element is already in view on mount.
    check()
    window.addEventListener("scroll", check, { passive: true })
    window.addEventListener("resize", check)
    return () => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    }
  }, [revealed, offset])

  return [ref, revealed]
}
