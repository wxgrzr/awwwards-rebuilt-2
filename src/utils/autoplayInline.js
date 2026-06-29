// Reliable inline muted autoplay across browsers — especially iOS Safari.
//
// React assigns `muted` as a DOM *property*, not as the HTML `muted`
// *attribute*. Under a strict autoplay policy (which iOS enforces) the browser
// can evaluate the `autoplay` attribute while the element still looks unmuted
// and block playback; React setting `.muted = true` a tick later does not
// retry. Setting muted explicitly and then calling play() — which is permitted
// for muted media without a user gesture — makes autoplay deterministic.
//
// Pass as a ref callback: <video ref={autoplayInline} muted autoPlay playsInline ... />
export const autoplayInline = el => {
  if (!el) return
  el.muted = true
  el.defaultMuted = true
  el.setAttribute("muted", "")
  el.playsInline = true
  el.setAttribute("playsinline", "")
  const playPromise = el.play()
  if (playPromise && typeof playPromise.catch === "function") {
    // Autoplay can still be rejected (e.g. very old browsers); ignore quietly.
    playPromise.catch(() => {})
  }
}
