import React from 'react'
import classnames from 'classnames'
import Sugar from 'sugar'

import { PageWithAside } from './PageWithAside'
import { PageHeader } from './PageHeader'

export type ArticlePageProps = {
  className?: string,
  title: string,
  tags?: string[],
  date?: string,
}

export const ArticlePage:React.FC<ArticlePageProps> = ({
  className,
  title,
  tags,
  date,
  children
}) => (
  <PageWithAside
    className={classnames(
      'article-page',
      className
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
  </PageWithAside>
)
