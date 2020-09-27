import React from 'react'
import classnames from 'classnames'

import './Card.scss'

export type CardProps = {
  children?: React.ReactChild | React.ReactChild[],
  className?: string,
  as?: React.ElementType
}

export const Card:React.FC<CardProps> = ({
  children,
  className,
  as
}) => {
  const ProxyElement = as

  return (
    <ProxyElement
      className={classnames(
        'card',
        className
      )}
    >
      {children}
    </ProxyElement>
  )
}

Card.defaultProps = {
  as: 'div'
}
