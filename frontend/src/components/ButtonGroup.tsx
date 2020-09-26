import React from 'react'
import classnames from 'classnames'

import './ButtonGroup.scss'

export enum ButtonGroupSeparatorStyles {
  Dot = 'dot',
  Line = 'line'
}

export enum ButtonGroupDirections {
  Column ='column',
  Vertical ='vertical',
  Row ='row',
  Horizontal ='horizontal'
}

export type ButtonGroupProps = {
  className?: string,
  itemClassName?: string,
  separatorClassName?: string,
  separators?: ButtonGroupSeparatorStyles,
  direction?: ButtonGroupDirections,
  wraps?: boolean,
  joined?: boolean,
  children?: React.ReactElement[],
}

export const ButtonGroup:React.FC<ButtonGroupProps> = (props) => {
  const {
    className,
    itemClassName,
    separatorClassName,
    separators,
    direction,
    wraps,
    joined,
    children
  } = props

  const directionName = (direction || '').toLowerCase()
  const separatorName = (separators || '').toLowerCase()

  return (
    <div className={classnames(
      'button-group',
      wraps && 'button-group--wraps',
      joined && 'button-group--joined',
      directionName === ButtonGroupDirections.Column && 'button-group--column',
      directionName === ButtonGroupDirections.Vertical && 'button-group--column',
      directionName === ButtonGroupDirections.Row && 'button-group--row',
      directionName === ButtonGroupDirections.Horizontal && 'button-group--row',
      separatorName === ButtonGroupSeparatorStyles.Dot && 'button-group--separated-by-dots',
      separatorName === ButtonGroupSeparatorStyles.Line && 'button-group--separated-by-lines',
      className
    )}>
      {React.Children.map(children, (child) => child)
        .filter(Boolean)
        .map((child, index) => (
          <span
            className={classnames(
              'button-group__separator',
              separatorClassName
            )}
            key={index}
          >
            {React.cloneElement(child, {
              className: classnames(
                'button-group__item',
                itemClassName
              )
            })}
          </span>
        ))}
    </div>
  )
}


ButtonGroup.defaultProps = {
  wraps: false,
  joined: true
}
