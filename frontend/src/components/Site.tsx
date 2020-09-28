import React from 'react'
import classnames from 'classnames'

import './Site.scss'

export type SiteProps = {
  contentSlot?: React.ReactNode,
  footerSlot?: React.ReactNode,
}

export const Site:React.FC<SiteProps> = ({
  contentSlot,
  footerSlot,
  children
}) => {
  return (
    <div
      className={classnames(
        'site',
      )}
    >
      <main className='site__content'>
        {children || contentSlot}
      </main>
      {footerSlot && (
        <footer className='site__footer'>
          {footerSlot}
        </footer>
      )}
    </div>
  )
}
