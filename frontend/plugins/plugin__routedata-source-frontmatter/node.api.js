import fs from 'fs'

import { get, merge } from 'lodash'
import yaml from 'yaml'
import unified from 'unified'
import vfile from 'to-vfile'
import remarkParse from 'remark-parse'
import frontMatter from 'remark-frontmatter'

class FrontmatterParser {
  constructor (config) {
    this.config = merge({
      type: 'yaml',
      marker: '-'
    }, config)
    this.parse = this.createParser(this.config)
  }

  createParser (config = this.config) {
    const parser = unified()
      .use(remarkParse)
      .use(frontMatter, config)
    return parser.parse
  }

  process (path) {
    const file = vfile.readSync(path)
    const output = this.parse(file.contents)
    const hasFrontmatter = output.children.some(item => get(item, 'type') === 'yaml')
    if (!hasFrontmatter) return {}

    return output.children
      .filter(item => get(item, 'type') === 'yaml')
      .reduce((result, item) => ({
        ...result,
        ...yaml.parse(item.value)
      }), {})
  }
}

export default (frontMatterConfig) => ({
  getRoutes: async (routes, state) => {
    const Parser = new FrontmatterParser(frontMatterConfig)
    return routes
      .map(route => {
        const data = Parser.process(route.originalPath)
        return {
          ...route,
          getData: () => data
        }
      })
  },
})
