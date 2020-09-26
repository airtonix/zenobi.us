import React, { useState } from 'react'
import classnames from 'classnames'

import './Hamburger.scss'
import { Spacings } from '~/uikit/settings/spacing'

export type HamburgerProps = {
  className?: string,
  onClick?: React.EffectCallback,
  isOpen?: boolean,
  size?: typeof Spacings[keyof typeof Spacings]
}

export const Hamburger:React.FC<HamburgerProps> = ({
  className,
  onClick,
  isOpen,
  size,
  ...props
}) => {
  const [ menuIsOpen, setMenuIsOpen ] = useState(isOpen)

  const handleClick:React.MouseEventHandler = () => {
    setMenuIsOpen(!menuIsOpen)
    onClick()
  }

  const handleKeyPress:React.KeyboardEventHandler = (event) => {
    if (event.key === 'enter') {
      onClick()
    }
  }

  return (
    <div
      role='button'
      tabIndex={0}
      className={classnames(
        'hamburger',
        menuIsOpen && 'hamburger--is-open',
        size && `hamburger--size-${size}`,
        className,
      )}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      {...props}
    >
      <div className='hamburger__symbol' />
    </div>
  )
}

Hamburger.defaultProps = {
  size: Spacings.Big
}


