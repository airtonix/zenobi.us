import React from 'react'
import classnames from 'classnames'
import Sugar from 'sugar'

import { PageHeader } from './PageHeader'
import { Page } from './Page'
import { SiteNavigation } from './Navigation'


export type ArticlePageProps = {
  className?: string,
  title: string,
  tags?: string[],
  date?: string,
  navigation?: React.ElementType
}

export const ArticlePage:React.FC<ArticlePageProps> = ({
  className,
  title,
  tags,
  date,
  navigation: Navigation = SiteNavigation,
  children
}) => (
  <Page
    className={classnames(
      'article-page',
      className
    )}
    asideSlot={(
      <Navigation />
    )}
  >
    <PageHeader
      title={title}
      date={Sugar.Date(date).short().raw}
      tags={tags}
    />

    <div className='article-page__content'>
      {children}
    </div>
  </Page>
)
