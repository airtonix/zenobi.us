import React from 'react'
import classnames from 'classnames'
import { Link } from '@reach/router'

import './PostSummary.scss'

import { Button, ButtonSizes } from './Button'

export type PostSummaryProps = {
  title: string,
  summary?: string,
  date?: string,
  tags?: string[],
  url: string,
  className?: string
}

export const PostSummary:React.FC<PostSummaryProps> = ({
  title,
  summary,
  tags,
  url,
  date,
  className,
}) => {

  // const format = (format: string):string => Sugar.Date(date).format(format).raw

  return (
    <div
      className={classnames(
        'post-summary',
        className
      )}
    >
      <header className='post-summary__header'>
        {url && (
          <Link
            to={url}
            className='post-summary__title'
          >
            {title}
          </Link>
        )}
        {!url && (
          <div className='post-summary__title'>{title}</div>
        )}
        {date && (
          <div className='post-summary__date'>{date}</div>
        )}
      </header>
      {summary && (
        <div className='post-summary__sumary'>{summary}</div>
      )}
      {tags && (
        <div className='post-summary__tags'>
          {tags.map((tag:string) => (
            <Button
              className='post-summary__tag'
              size={ButtonSizes.Small}
            >
              {tag}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

PostSummary.defaultProps = {
  tags: []
}
