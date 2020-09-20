import React from 'react';
import classnames from 'classnames';


import './page.scss'

export interface BasePageProps {
  className?: string
}

export const BasePage: React.FC<BasePageProps> = ({
  className,
  children
}) => {
  return (
    <div className={classnames(
      'page',
      className
    )}>
      {children}
    </div>
  )
}

