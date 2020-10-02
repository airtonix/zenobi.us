import React from 'react'
import classnames from 'classnames'

import { ButtonGroup } from './ButtonGroup'
import { Button } from './Button'

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
      className={classnames(
        'tag-list',
        className
      )}
    >
      {tags.map(tag => ( <Button>{tag}</Button>))}
    </ButtonGroup>
  )
}
