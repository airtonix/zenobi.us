
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { Site } from './components/Site'

import './index.scss'

// Render your Site
if (typeof document !== 'undefined') {
  const target = document.querySelector('#root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp: CallableFunction) => {
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
    module.hot.accept('./components/Site', () => {
      render(Site)
    })
  }
}
