import React from 'react'
import { Link } from '@reach/router'
import * as classnames from 'classnames'

import './navigation.scss'

export type NavigationItem = {
  href: string,
  label: string,
  exact?: boolean
}

export type NavigationProps = {
  routes: NavigationItem[],
  isVertical?: boolean
}

export const Navigation:React.FC<NavigationProps> = (props) => {
  const {
    routes,
    isVertical
  } = props 
  
  return (
    <nav className={classnames(
      'navigation',
      isVertical && 'navigation--vertical'
    )}>
      <div className='navigation__group--onscreen'>
        {routes.map((link: NavigationItem ) =>
          (
            <div
              className='navigation__link'
              key={link.href}
            >
              <Link
                to={link.href}>
                {link.label}
              </Link>
            </div>
          )
        )}
      </div>
    </nav>
  )
}

Navigation.defaultProps = {
  routes: [],
}