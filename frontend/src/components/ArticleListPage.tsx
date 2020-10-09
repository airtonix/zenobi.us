import React from 'react'
import classnames from 'classnames'

import { PageWithAside } from './PageWithAside'
import { PageHeader } from './PageHeader'
import { PostSummary, PostSummaryProps } from './PostSummary'

export type ArticleListPageProps = {
  className?: string,
  title: string,
  posts: PostSummaryProps[]
}

export const ArticleListPage:React.FC<ArticleListPageProps> = ({
  className,
  title,
  posts,
  children
}) => (
  <PageWithAside
    className={classnames(
      'article-list-page',
      className
    )}
  >
    <PageHeader
      title={title}
    />

    {children}

    <div className='article-list-page__content'>
      {posts.map(PostSummary)}
    </div>
  </PageWithAside>
)
