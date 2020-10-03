import React from 'react'
import classnames from 'classnames'

import './PageHeader.scss'
import { TagList } from './TagList'

export type PageHeaderProps = {
  className?: string,
  title: string,
  date?: string,
  tags?: string[],
}

export const PageHeader:React.FC<PageHeaderProps> = ({
  className,
  title,
  date,
  tags
}) => {
  return (
    <header
      className={classnames(
        'page-header',
        className
      )}
    >
      <h1 className='page-header__title'>{title}</h1>
      {tags && (
        <TagList
          className='page-header__tags'
          tags={tags}
        />
      )}
      {date && (
        <small className='page-header__date'>{date}</small>
      )}
    </header>
  )
}
