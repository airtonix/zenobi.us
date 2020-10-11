import React from 'react'
import classnames from 'classnames'
import Sugar from 'sugar'

import { PageHeader } from './PageHeader'
import { BrandingBlock, BrandingBlockStyles } from './BrandingBlock'
import { Page } from './Page'


export type ArticlePageProps = {
  className?: string,
  title: string,
  tags?: string[],
  date?: string,
  branding?: React.ElementType
}

export const ArticlePage:React.FC<ArticlePageProps> = ({
  className,
  title,
  tags,
  date,
  branding: Branding = BrandingBlock,
  children
}) => (
  <Page
    className={classnames(
      'article-page',
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
      date={Sugar.Date(date).short().raw}
      tags={tags}
    />

    <div className='article-page__content'>
      {children}
    </div>
  </Page>
)
