import React from 'react';

import { GlobalProvider } from './src/context/globalContext'

// Don't let the browser restore the previous scroll position on reload —
// always start at the top.
export const onClientEntry = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }

  // Mobile Safari (and some Android browsers) restore scroll from the
  // bfcache on reload without re-running this hook, so force the top on
  // every pageshow — covers both a normal reload and a bfcache restore.
  window.addEventListener('pageshow', () => {
    window.scrollTo(0, 0)
  })
}

// Also reset after Gatsby's first render, in case its own scroll
// restoration runs after the browser settles.
export const onInitialClientRender = () => {
  window.scrollTo(0, 0)
}

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalProvider>
      {element}
    </GlobalProvider>
  )
}