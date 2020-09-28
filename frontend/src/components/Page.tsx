import React, { useState } from 'react'
import classnames from 'classnames'

import { Block } from './Block'
import { Hamburger } from './Hamburger'
import './Page.scss'

export interface PageProps {
  className?: string,
  asideSlot?: React.ReactNode,
}

export const Page: React.FC<PageProps> = ({
  className,
  asideSlot,
  children
}) => {

  const [isOpen, setOpen] = useState(false)

  const handleOpenToggle = () => {
    setOpen(!isOpen)
  }
  return (
    <Block
      as='article'
      className={classnames(
        'page',
        isOpen && 'page--is-open',
        className
      )}
    >
      {asideSlot && (
        <Hamburger
          className='page__hamburger'
          onClick={handleOpenToggle}
        />
      )}
      {asideSlot && (
        <aside className='page__aside'>
          {asideSlot}
        </aside>
      )}
      <div className='page__content'>
        {children}
      </div>
    </Block>
  )
}

