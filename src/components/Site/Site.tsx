import React from 'react'
import { Routes } from 'react-static'
import { Router } from '@reach/router'

import { Navigation } from '~/components/Navigation/Navigation'

import './Site.scss'

export const Site:React.FC = () => {
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
            <Routes path='*' />
          </Router>
        </React.Suspense>
      </div>
      <footer className='site__footer'>
      </footer>
    </div>
  )
}