import React, { useState } from 'react'
import classnames from 'classnames'

import { Block, BlockProps } from './Block'
import { ButtonGroupDirections } from './ButtonGroup'
import { SiteNavigation } from './Navigation'
import BrandingLogo from './BrandingLogo.svg'
import './BrandingBlock.scss'
import { Hamburger } from './Hamburger'

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
  const [isOpen, setOpen] = useState(false)

  const handleOpenToggle = () => {
    setOpen(!isOpen)
  }

  const styleName = (style || '').toLowerCase()
  return (
    <Block
      {...props}
      className={classnames(
        'branding-block',
        isOpen && 'branding-block--is-open',
        styleName === BrandingBlockStyles.Hero && 'branding-block--is-hero',
        styleName === BrandingBlockStyles.Badge && 'branding-block--is-badge',
        className
      )}
    >
      <Hamburger
        className='branding-block__hamburger'
        onClick={handleOpenToggle}
      />

      <BrandingLogo
        className='branding-block__image'
      />
      <SiteNavigation
        direction={(
          styleName === BrandingBlockStyles.Hero
            ? ButtonGroupDirections.Horizontal
            : ButtonGroupDirections.Vertical
        )}
      />
    </Block>
  )
}
