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
  className: string,
  itemClassName: string,
  separatorClassName: string,
  separators: ButtonGroupSeparatorStyles,
  direction: ButtonGroupDirections,
  wraps: boolean,
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
    children
  } = props

  const directionName = (direction || '').toLowerCase()
  const separatorName = (separators || '').toLowerCase()

  return (
    <div className={classnames(
      'button-group',
      wraps && 'button-groups--wraps',
      directionName === ButtonGroupDirections.Column && 'button-groups--is-column',
      directionName === ButtonGroupDirections.Vertical && 'button-groups--is-column',
      directionName === ButtonGroupDirections.Row && 'button-groups--is-row',
      directionName === ButtonGroupDirections.Horizontal && 'button-groups--is-row',
      separatorName === ButtonGroupSeparatorStyles.Dot && 'button-groups--separated-by-dots',
      separatorName === ButtonGroupSeparatorStyles.Line && 'button-groups--separated-by-lines',
      className
    )}>
      {React.Children.map(children, (child) => child)
        .filter(Boolean)
        .map((child) => (
          <span className={classnames(
            'button-group__separator',
            separatorClassName
          )}>
            {React.cloneElement(child, {
              className: classnames('button-group__item', itemClassName)
            })}
          </span>
        ))}
    </div>
  )
}


ButtonGroup.defaultProps = {
  wraps: true,
}
