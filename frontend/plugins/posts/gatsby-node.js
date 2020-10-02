const path = require('path')

const { kebabCase, get } = require('lodash')

exports.createPages = async ({ graphql, actions, reporters }, pluginOptions) => {
  const {
    toCollection,
    toPage,
    query
  } = pluginOptions
  const {
    createPage
  } = actions

  const result = await graphql(`
  query {
    allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
      nodes {
        childMdx {
          id
          frontmatter {
            title
            slug
            template
          }
        }
      }
    }
  }
  `)

  if (result.errors) {
    reporters.panicOnBuild('🚨 GraphQL query error', result.errors)
    return
  }

  const collection = result.data.allFile.nodes
    .reduce((result, node) => ([
      ...result,
      node.childMdx
    ]), [])

  const pages = collection
    .map((page) => {
      const title = get(page, 'frontmatter.title')
      const template = get(page, 'frontmatter.template') || 'components/ArticlePage.tsx'
      const slug = get(page, 'frontmatter.slug') || kebabCase(title)
      const output = {
        path: `thoughts/${slug}`,
        component: path.resolve(`./src/${template}`),
        slug,
        context: {
          id: page.id
        }
      }
      return output
    })

  pages
    .forEach((page) => {
      createPage(page)
    })
}
