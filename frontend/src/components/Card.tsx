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
  as,
  ...props
}) => {
  const ProxyElement = as

  return (
    <ProxyElement
      className={classnames(
        'card',
        className
      )}
      {...props}
    >
      <span className='card__container'>
        {children}
      </span>
    </ProxyElement>
  )
}

Card.defaultProps = {
  as: 'div'
}
