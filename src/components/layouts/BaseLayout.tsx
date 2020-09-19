import React from 'react'

export const BaseLayout:React.FC<{
  navigationSlot: React.ReactNode,
  footerSlot: React.ReactNode
}> = ({ children, navigationSlot, footerSlot }) => {
  return (
    <div className='site-layout'>
      <header className='site-layout__header'>
        <div className='site-layout__navigation'>
          {navigationSlot}
        </div>
      </header>
      <div className='site-layout__content'>
        {children}
      </div>
      <div className='site-layout__footer'>
        {footerSlot}
      </div>
    </div>
  )
}