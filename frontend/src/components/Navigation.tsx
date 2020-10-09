import React from 'react'
import classnames from 'classnames'
import { Link, GatsbyLinkProps } from 'gatsby'

import { ButtonLink, ButtonProps } from './Button'
import { ButtonGroup, ButtonGroupDirections } from './ButtonGroup'

import './Navigation.scss'

export type NavigationButtonProps = ButtonProps & GatsbyLinkProps<any>

export const NavigationButton:React.FC<NavigationButtonProps> = ({
  children,
  ...props
}) => (
  <ButtonLink
    as={Link}
    {...props}
  >
    {children}
  </ButtonLink>
)

export type SiteNavigationProps = {
  className?: string,
  direction?: ButtonGroupDirections
}

export const SiteNavigation:React.FC<SiteNavigationProps> = ({
  className,
  direction = ButtonGroupDirections.Horizontal
}) => {
  return (
    <ButtonGroup
      className={classnames(
        'site-navigation',
        className
      )}
      direction={direction}
    >
      <NavigationButton key='/' to='/'>Home</NavigationButton>
      <NavigationButton key='/about/me' to='/about/me/'>Resume</NavigationButton>
      <NavigationButton key='/posts/' to='/posts/'>Thoughts</NavigationButton>
    </ButtonGroup>
  )
}
