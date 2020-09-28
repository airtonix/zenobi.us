import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Routes } from 'react-static'
import { Router } from '@reach/router'
import {Helmet} from 'react-helmet'

import { CodeBlock } from '~/components/CodeBlock'
import { Site } from '~/components/Site'

export const App:React.FC = () => {
  return (
    <React.Suspense fallback={<em>Loading...</em>}>
      <Helmet>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.2.0/build/styles/atom-one-dark.min.css' />
      </Helmet>
      <MDXProvider components={{
        code: CodeBlock
      }}>
        <Site>
          <Router>
            <Routes path='*' />
          </Router>
        </Site>
      </MDXProvider>
    </React.Suspense>
  )
}
