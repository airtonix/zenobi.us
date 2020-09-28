import React from 'react'
import classnames from 'classnames'
import Sugar from 'sugar'

import './PostCard.scss'
import { Card, CardProps } from './Card'
import { Button, ButtonSizes } from './Button'

export type PostCardProps = CardProps & {
  title: string,
  summary?: string,
  date?: string,
  tags?: string[],
  url: string
}

export const PostCard:React.FC<PostCardProps> = ({
  title,
  summary,
  tags,
  url,
  date,
  className,
  ...props
}) => {

  const format = (format: string) => Sugar.Date(date).format(format).raw

  return (
    <Card
      {...props}
      as='a'
      className={classnames(
        'post-card',
        className
      )}
    >
      <header className='post-card__header'>
        <div className='post-card__title'>{title}</div>
        {date && (
          <div className='post-card__date'>{format('%e %B')}</div>
        )}
      </header>
      <div className='post-card__sumary'>{summary}</div>
      <div className='post-card__tags'>
        {tags.map(tag => (
          <Button
            className='post-card__tag'
            size={ButtonSizes.Small}
          >
            {tag}
          </Button>
        ))}
      </div>
    </Card>
  )
}

PostCard.defaultProps = {
  tags: []
}
