import React, { useState } from 'react'
import classnames from 'classnames'

import { Block, BlockProps } from './Block'
import { ButtonGroupDirections } from './ButtonGroup'
import { SiteNavigation } from './Navigation'
import BrandingLogo from './BrandingLogo.svg'
import './BrandingBlock.scss'

export type BrandingProps = BlockProps & {
  style: BrandingBlockStyles
}

export enum BrandingBlockStyles {
  Badge = 'badge',
  Hero = 'hero'
}

export const BrandingBlock:React.FC<BrandingProps> = ({
  style,
  className,
  ...props
}) => {
  const styleName = (style || '').toLowerCase()
  return (
    <Block
      {...props}
      className={classnames(
        'branding-block',
        styleName === BrandingBlockStyles.Hero && 'branding-block--is-hero',
        styleName === BrandingBlockStyles.Badge && 'branding-block--is-badge',
        className
      )}
    >
      <BrandingLogo
        className='branding-block__image'
      />
      <SiteNavigation
        className='branding-block__nav'
        direction={(
          styleName === BrandingBlockStyles.Hero
            ? ButtonGroupDirections.Horizontal
            : ButtonGroupDirections.Vertical
        )}
      />
    </Block>
  )
}
