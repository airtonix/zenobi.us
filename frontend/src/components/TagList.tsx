import React from 'react'
import classnames from 'classnames'

import { ButtonGroup, ButtonGroupDirections, ButtonGroupSeparatorStyles } from './ButtonGroup'
import { Button, ButtonShapes, ButtonSizes, ButtonStyles } from './Button'

export type TagListProps = {
  className?: string,
  tags: string[]
}

export const TagList:React.FC<TagListProps> = ({
  className,
  tags
}) => {
  return (
    <ButtonGroup
      joined={false}
      direction={ButtonGroupDirections.Row}
      separators={ButtonGroupSeparatorStyles.Space}
      className={classnames(
        'tag-list',
        className
      )}
    >
      {tags.map(tag => (
        <Button
          size={ButtonSizes.Normal}
          style={ButtonStyles.Primary}
          shape={ButtonShapes.Circular}
        >{tag}</Button>
      ))}
    </ButtonGroup>
  )
}
