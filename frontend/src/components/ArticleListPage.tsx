import React from 'react'
import classnames from 'classnames'

import { PageHeader } from './PageHeader'
import { PostSummary, PostSummaryProps } from './PostSummary'
import { Page } from './Page'
import { BrandingBlock, BrandingBlockStyles } from './BrandingBlock'

export type ArticleListPageProps = {
  className?: string,
  title: string,
  postLink: React.ElementType,
  posts: PostSummaryProps[],
  branding?: React.ElementType
}

export const ArticleListPage:React.FC<ArticleListPageProps> = ({
  className,
  title,
  posts,
  postLink,
  branding: Branding = BrandingBlock,
  children
}) => (
  <Page
    className={classnames(
      'article-list-page',
      className
    )}
    asideSlot={(
      <Branding
        style={BrandingBlockStyles.Badge}
      />
    )}
  >
    <PageHeader
      title={title}
    />
    {children}

    <div className='article-list-page__content'>
      {posts.map(post => (
        <PostSummary link={postLink} {...post} />
      ))}
    </div>
  </Page>
)
