import React from 'react'
import { useRouteData } from 'react-static'

import { FileList, FileListProps } from './FileList'

export const FileListWithRouteData:React.FC<FileListProps> = (props) => {
  return (
    <FileList
      {...props}
      data={useRouteData()}
    />
  )
}
