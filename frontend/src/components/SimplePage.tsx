import React from 'react'
import classnames from 'classnames'

import { PageHeader } from './PageHeader'
import { BrandingBlock, BrandingBlockStyles } from './BrandingBlock'
import { Page } from './Page'

export type SimplePageProps = {
  className?: string,
  title: string,
  tags?: string[],
  date?: string,
  branding?: React.ElementType
}

export const SimplePage:React.FC<SimplePageProps> = ({
  className,
  title,
  branding: Branding = BrandingBlock,
  children
}) => (
  <Page
    className={classnames(
      'simple-page',
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
    <div className='article-page__content'>
      {children}
    </div>
  </Page>
)
