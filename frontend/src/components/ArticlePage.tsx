import React from 'react'
import classnames from 'classnames'

import { PageWithAside } from './PageWithAside'
import { PageHeader } from './PageHeader'
import { TagList } from './TagList'

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
    >
      {date && (
        <small>{date}</small>
      )}
      {tags && (
        <TagList tags={tags} />
      )}
    </PageHeader>

    <div className='article-page__content'>
      {children}
    </div>
  </PageWithAside>
)
