import React from 'react'
import classnames from 'classnames'

import { BrandingBlock, BrandingBlockStyles } from './BrandingBlock'
import { Page } from './Page'

export type PageWithAsideProps = {
  className?: string,
}

export const PageWithAside:React.FC<PageWithAsideProps> = ({
  className,
  children
}) => (
  <Page
    className={classnames(
      'detail-page',
      className
    )}
    asideSlot={(
      <BrandingBlock
        style={BrandingBlockStyles.Badge}
      />
    )}
  >
    {children}
  </Page>
)
