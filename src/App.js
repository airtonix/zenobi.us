import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import Navigation from '@components/navigation';
import './core.scss'
import './site__zenobius.scss'

const App = (props) => (
  <Router>
    <div className="app">
      <Navigation
        routes={[
          {href: '/', exact: true, label: 'Home'},
          {href: '/resume', label: 'About'},
          {href: '/posts', label: 'Blog'}
        ]}/>
      <div className="app__content">
        <Routes />
      </div>
      <footer className="app__footer">
      </footer>
    </div>
  </Router>
)

export default hot(module)(App)