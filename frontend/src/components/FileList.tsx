import React from 'react'
import classnames from 'classnames'
import jsonata from 'jsonata'

import { Card } from './Card'

export type FileListProps = {
    className?: string,
    query: string,
    data: any,
    debug?: boolean,
    component?: React.ElementType
}

export const FileList:React.FC<FileListProps> = ({
  className,
  query,
  data,
  debug = false,
  component: Component,
}) => {
  let result:any[] = []
  try {
    const expression = jsonata(query)
    result = expression.evaluate(data)
  } catch (err) {

    return (
      <Card>
        <pre>
          code: {err.code}
          message: {err.message}
          ---
        </pre>
      </Card>
    )
  }

  return (
    <div className={classnames(
      'file-list',
      className
    )}>
      {result.map((item:any) => (
        <Component {...item} />
      ))}
      {debug && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  )
}
