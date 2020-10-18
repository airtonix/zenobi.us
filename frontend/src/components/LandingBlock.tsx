import React from 'react'

import { Block, BlockProps } from './Block'
import { ReactComponent as BrandingLogo } from './BrandingLogo.svg'

import './LandingBlock.scss'

export const LandingBlock:React.FC<BlockProps> = () => {
  return (
    <Block
      className={'landing-block'}
    >
      <h1 className='landing-block__heading'>Hi there, I'm Zenobius</h1>
      <BrandingLogo
        className={'landing-block__logo'}
      />
    </Block>
  )
}
