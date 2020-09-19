import React, { Children } from 'react'
import classnames from 'classnames'

import './button.scss'

export type ButtonProps = {
    label: string,
    children: React.ReactChild[],
    tooltip: string | React.ReactNode,
    style: ButtonStyles,
    size: ButtonSizes,
    prefixIcon?: React.ReactNode,
    suffixIcon?: React.ReactNode,
    onClick: CallableFunction,
    disabled: boolean,
    as: React.ElementType
} 

export enum ButtonStyles {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
    Link = 'link',
}

export enum ButtonSizes {
    Tiny = 'tiny',
    Small = 'small',
    Normal = 'normal',
    Big = 'big',
    Large = 'large',
    Huge = 'huge'
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  tooltip,
  style,
  size,
  prefixIcon,
  suffixIcon,
  disabled,
  onClick,
  as,
  children
}) => {
  const ProxyElement = as || 'button'
  const handleClick = (event: React.SyntheticEvent) => {
    if (typeof onClick !== 'function') return
    onClick(event)
  }
  return (
    <ProxyElement
      className={classnames(
        'button',
        size === ButtonSizes.Tiny && 'button--tiny',
        size === ButtonSizes.Small && 'button--small',
        size === ButtonSizes.Large && 'button--large',
        size === ButtonSizes.Huge && 'button--huge',
        style === ButtonStyles.Primary && 'button--primary',
        style === ButtonStyles.Secondary && 'button--secondary',
        style === ButtonStyles.Tertiary && 'button--tertiary',
        style === ButtonStyles.Link && 'button--link',
      )}
      title={tooltip}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className='button__icon button__icon--prefix'>
        {prefixIcon}
      </span>
      <span className='button__label'>
        {label || children}
      </span>
      <span className='button__icon button__icon--suffix'>
        {suffixIcon}
      </span>
    </ProxyElement>
  )
}

Button.defaultProps = {
  as: 'button',
  size: ButtonSizes.Normal
}
