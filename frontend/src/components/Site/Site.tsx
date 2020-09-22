import React from 'react'
import { Routes } from 'react-static'
import { Router } from '@reach/router'
import { Transition, animated } from 'react-spring/renderprops'

import { Page } from '../Page/Page'

import { Navigation } from '~/components/Navigation/Navigation'

import './Site.scss'

export const Site:React.FC = () => {
  const renderPage = (props: { routePath: string, getComponentForPath: CallableFunction }) => {
    const {
      routePath,
      getComponentForPath
    } = props
    // The routePath is used to retrieve the component for that path
    // Using the routePath as the key, both routes will render at the same time for the transition
    const element = getComponentForPath(routePath);
    return (
      <Transition
        native
        items={routePath}
        from={{ transform: 'translateY(100px)', opacity: 0 }}
        enter={{ transform: 'translateY(0px)', opacity: 1 }}
        leave={{ transform: 'translateY(100px)', opacity: 0 }}
      >
        {() => (props) => {
          return <animated.div
            style={props}
          >
            <Page>
              {element}
            </Page>
          </animated.div>
        }}
      </Transition>
    )
  }
  return (
    <div className='site'>
      <header className='site__header'></header>
      <div className='site__content'>
        <Navigation
          className='site__navigation'
          isVertical
          routes={[
            {href: '/', exact: true, label: 'Home'},
            {href: '/resume', label: 'About'},
            {href: '/posts', label: 'Blog'}
          ]}
        />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router className='site__router'>
            <Routes path='*' render={renderPage} />
          </Router>
        </React.Suspense>
      </div>
      <footer className='site__footer'>
      </footer>
    </div>
  )
}