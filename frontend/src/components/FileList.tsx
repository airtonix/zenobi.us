import React from 'react'
import classnames from 'classnames'
import { useRouteData } from 'react-static'
import graphql from 'graphql-anywhere'
import gql from 'graphql-tag'
import { get } from 'lodash'

export type FileListProps = {
    className?: string,
    query: string,
    children: (data: any) => React.ReactNode
}

export const FileList:React.FC<FileListProps> = ({
  className,
  query,
  children,
}) => {
  const resolve = (fieldName:string, root: any) => {
    return get(root, fieldName)
  }
  const data = useRouteData()
  const makeQuery = (query: string) => gql`${query}`
  const result = graphql(
    resolve,
    makeQuery(query),
    data
  )

  return (
    <div className={classnames(
      'file-list',
      className
    )}>
      {children(result)}
    </div>
  )
}
