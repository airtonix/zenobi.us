import React from 'react';

import { BasePage } from './PageBase';

export interface PageProps {
  title?: string,
}

export const Page:React.FC<PageProps> = ({
  title,
  children
}) => {
  return (
    <BasePage className='generic-page'>
      <h3 className='page__header'>
        {title}
      </h3>
      <main className='page__body'>
        {children}
      </main>
    </BasePage>
  )
}