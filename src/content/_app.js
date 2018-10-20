import React from 'react'
import classnames from 'classnames';

import Nav from '@components/navigation';
import HeroSection from '@components/sections/hero-section';
import Footer from '@components/footer';

import "./core.scss";


export default class App extends React.Component {
  render () {
    const {
      location,
      render,
      routes
    } = this.props

    const route = routes.find(route => route.path === location.pathname)

    return (
      <div className={'site-layout'}>
        <header className="site-layout__header">
          <Nav mixClass="site-layout__navigation" links={routes} />
        </header>
        <div className="site-layout__content">
          {render()}
        </div>
        <Footer className="site-layout__footer" />
      </div>
    )
  }
}