import React from 'react'
import classnames from 'classnames'

import { Block } from './Block'
import { ReactComponent as BrandingLogo } from './BrandingLogo.svg'
import { ReactComponent as BrandingDivider } from './BrandingDivider.svg'

export const BrandingBlock:React.FC = () => (
  <Block className='branding-block'>
    <BrandingLogo className='branding-block__logo' />
    <BrandingDivider className='branding-block__divider' />
  </Block>
)