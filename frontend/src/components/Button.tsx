import React from 'react'
import classnames from 'classnames'

import { Icon } from './Icon'

import './Button.scss'

export type ButtonProps = {
    label?: string,
    children?: React.ReactChild | React.ReactChild[],
    tooltip?: string | React.ReactNode,
    style?: ButtonStyles,
    size?: ButtonSizes,
    shape?: ButtonShapes,
    prefixIcon?: React.ReactNode,
    suffixIcon?: React.ReactNode,
    onClick?: CallableFunction,
    disabled?: boolean,
    isHover?: boolean,
    isFocus?: boolean,
    isActive?: boolean,
    className?: string,
    as?: React.ElementType
}

export enum ButtonStyles {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
    Link = 'link',
}

export enum ButtonShapes {
    Square = 'square',
    Round = 'round',
    Circular = 'circular'
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
  shape,
  prefixIcon,
  suffixIcon,
  disabled,
  isActive,
  isFocus,
  isHover,
  as,
  children,
  className,
  ...props
}) => {
  const ProxyElement = as

  return (
    <ProxyElement
      className={classnames(
        'button',
        className,
        isActive && 'button--is-active',
        isFocus && 'button--is-focused',
        isHover && 'button--is-hovered',
        size === ButtonSizes.Tiny && 'button--tiny',
        size === ButtonSizes.Small && 'button--small',
        size === ButtonSizes.Large && 'button--large',
        size === ButtonSizes.Huge && 'button--huge',
        shape === ButtonShapes.Square && 'button--shape-square',
        shape === ButtonShapes.Round && 'button--shape-round',
        shape === ButtonShapes.Circular && 'button--shape-circular',
        style === ButtonStyles.Primary && 'button--primary',
        style === ButtonStyles.Secondary && 'button--secondary',
        style === ButtonStyles.Tertiary && 'button--tertiary',
        style === ButtonStyles.Link && 'button--link',
      )}
      title={tooltip}
      disabled={disabled}
      {...props}
    >
      {prefixIcon && (
        <span className='button__icon button__icon--prefix'>
          {typeof prefixIcon === 'string'
            ? <Icon>{prefixIcon}</Icon>
            : prefixIcon
          }
        </span>
      )}

      <span className='button__label'>
        {label || children}
      </span>

      {suffixIcon && (
        <span className='button__icon button__icon--suffix'>
          {typeof suffixIcon === 'string'
            ? <Icon>{suffixIcon}</Icon>
            : suffixIcon
          }
        </span>
      )}
    </ProxyElement>
  )
}

Button.defaultProps = {
  as: 'button',
}

export const ButtonPrimary:React.FC<ButtonProps> = (props) => (
  <Button {...props} style={ButtonStyles.Primary} />
)

export const ButtonSecondary:React.FC<ButtonProps> = (props) => (
  <Button {...props} style={ButtonStyles.Secondary} />
)

export const ButtonTertiary:React.FC<ButtonProps> = (props) => (
  <Button {...props} style={ButtonStyles.Tertiary} />
)

export const ButtonLink:React.FC<ButtonProps> = (props) => (
  <Button {...props} style={ButtonStyles.Link} />
)
