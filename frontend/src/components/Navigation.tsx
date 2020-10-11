import React from 'react'
import classnames from 'classnames'

import { ButtonGroup, ButtonGroupDirections } from './ButtonGroup'
import { ButtonLink, ButtonProps } from './Button'

import './Navigation.scss'

export type SiteNavigationProps = {
  className?: string,
  direction?: ButtonGroupDirections,
  links?: ButtonProps[]
}

export const SiteNavigation:React.FC<SiteNavigationProps> = ({
  className,
  direction = ButtonGroupDirections.Horizontal,
  links = []
}) => {
  return (
    <ButtonGroup
      className={classnames(
        'site-navigation',
        className
      )}
      direction={direction}
    >
      {links && links.map(({ label, ...link}) => (
        <ButtonLink {...link}>{label}</ButtonLink>
      ))}
    </ButtonGroup>
  )
}
