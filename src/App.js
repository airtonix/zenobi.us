import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './core.scss'
import './site__zenobius.scss'

const App = (props) => (
  <Router>
    <div className="app">
      <nav className="app__navigation">
        <Link exact to="/">Home</Link>
        <Link to="/resume">About</Link>
        <Link to="/posts">Blog</Link>
      </nav>
      <div className="app__content">
        <Routes />
      </div>
      <footer className="app__footer">
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </footer>
    </div>
  </Router>
)

export default hot(module)(App)