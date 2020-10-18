import React from 'react'
// import classnames from 'classnames'

import { Block, BlockProps } from './Block'
import { ReactComponent as BrandingLogo } from './BrandingLogo.svg'
import { ReactComponent as LandingBlockSpearator } from './LandingBlockSeparator.svg'

import './LandingBlock.scss'

export type LandingBlockProps = BlockProps

export const LandingBlock:React.FC<LandingBlockProps> = () => {
  return (
    <Block
      className='landing-block'
    >
      <h1 className='landing-block__heading'>Hi there, I'm Zenobius</h1>
      <BrandingLogo
        className='landing-block__logo'
      />
      <LandingBlockSpearator className='landing-block__separator' />
    </Block>
  )
}
