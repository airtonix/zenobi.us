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
  isVertical?: boolean,
  className?: string
}

export const Navigation:React.FC<NavigationProps> = (props) => {
  const {
    routes,
    isVertical,
    className
  } = props 
  
  return (
    <nav className={classnames(
      'navigation',
      className,
      isVertical && 'navigation--vertical'
    )}>
      <div className='navigation__group'>
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