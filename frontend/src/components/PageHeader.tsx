import React from 'react'
import classnames from 'classnames'

import './PageHeader.scss'

export type PageHeaderProps = {
  className?: string,
  title: string
}

export const PageHeader:React.FC<PageHeaderProps> = ({
  className,
  title,
  children,
}) => {
  return (
    <header
      className={classnames(
        'page-header',
        className
      )}
    >
      <h1 className='page-header__title'>{title}</h1>
      {children}
    </header>
  )
}
