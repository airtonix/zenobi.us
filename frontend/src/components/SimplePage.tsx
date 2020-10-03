import React from 'react'
import classnames from 'classnames'

import { PageWithAside } from './PageWithAside'
import { PageHeader } from './PageHeader'

export type SimplePageProps = {
  className?: string,
  title: string,
  tags?: string[],
  date?: string,
}

export const SimplePage:React.FC<SimplePageProps> = ({
  className,
  title,
  children
}) => (
  <PageWithAside
    className={classnames(
      'simple-page',
      className
    )}
  >
    <PageHeader
      title={title}
    />
    <div className='article-page__content'>
      {children}
    </div>
  </PageWithAside>
)
