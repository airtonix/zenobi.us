import React from 'react'
import classnames from 'classnames'

import { Block } from './Block'

import './CodeBlock.scss'

export type CodeBlockProps = {
  className?: string
}

export const CodeBlock:React.FC<CodeBlockProps> = ({
  className,
  children
}) => {
  return (
    <Block
      className={classnames(
        'code-block',
        className
      )}
      as='code'
    >
      {children}
    </Block>
  )
}
