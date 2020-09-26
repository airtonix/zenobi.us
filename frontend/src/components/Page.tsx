import React from 'react'
import classnames from 'classnames'

import './Page.scss'

export interface PageProps {
  className?: string
}

export const Page: React.FC<PageProps> = ({
  className,
  children
}) => {
  return (
    <article className={classnames(
      'page',
      className
    )}>
      {children}
    </article>
  )
}

