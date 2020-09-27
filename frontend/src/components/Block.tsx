import React from 'react'
import classnames from 'classnames'

import './Block.scss'

export type BlockComponent = typeof Block

export type BlockProps = {
    className?: string,
    as?: React.ElementType,
    footerSlot?: React.ReactChildren
}

export const Block:React.FC<BlockProps> = ({
  className,
  footerSlot,
  children
}) => (
  <div className={classnames(
    'block',
    className
  )}>
    <div className='block__container'>
      <div className='block__content'>
        {children}
      </div>
      {footerSlot && (
        <div className='block__footer'>
          {footerSlot}
        </div>
      )}
    </div>
  </div>
)
Block.defaultProps = {
  as: 'div',
}
