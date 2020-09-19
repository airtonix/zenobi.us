import React from 'react'
import { Routes } from 'react-static'
import { Router } from '@reach/router'

import { Navigation } from '~/components/Navigation/Navigation'

import './Site.scss'

export const Site:React.FC = () => {
  return (
    <div className='site'>
      <Navigation
        isVertical
        routes={[
          {href: '/', exact: true, label: 'Home'},
          {href: '/resume', label: 'About'},
          {href: '/posts', label: 'Blog'}
        ]}
      />
      <div className='site__content'>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path='*' />
          </Router>
        </React.Suspense>
      </div>
      <footer className='site__footer'>
      </footer>
    </div>
  )
}