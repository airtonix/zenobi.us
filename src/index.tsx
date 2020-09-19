  
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Your top level component
import { Site } from '~/components/site/Site'

// Export your top level component as JSX (for static rendering)
export default Site

// Render your app
if (typeof document !== 'undefined') {
  const target = document.querySelector('#root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp: Function) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(Site)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./components/site/Site', () => {
      render(Site)
    })
  }
}