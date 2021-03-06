import React from 'react'
import classnames from 'classnames'

import { Block, BlockProps } from './Block'
import { ButtonGroupDirections } from './ButtonGroup'
import { SiteNavigation } from './Navigation'
import { ReactComponent as BrandingLogo } from './BrandingLogo.svg'
import { ButtonProps } from './Button'
import './BrandingBlock.scss'


export type BrandingBlockLinkProps = ButtonProps

export type BrandingBlockProps = BlockProps & {
  style: BrandingBlockStyles,
  links?: BrandingBlockLinkProps[]
}

export enum BrandingBlockStyles {
  Badge = 'badge',
  Hero = 'hero'
}

export const BrandingBlock:React.FC<BrandingBlockProps> = ({
  style,
  className,
  links,
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
      {BrandingLogo && (
        <BrandingLogo
          className='branding-block__image'
        />
      )}
      <SiteNavigation
        className='branding-block__nav'
        links={links}
        direction={(
          styleName === BrandingBlockStyles.Hero
            ? ButtonGroupDirections.Horizontal
            : ButtonGroupDirections.Vertical
        )}
      />
    </Block>
  )
}
