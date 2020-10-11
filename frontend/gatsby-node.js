/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const { get } = require('lodash')
/* eslint-enable @typescript-eslint/no-var-requires */

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug,
          }
        }
      }
    }
  `)

  const nodes = get(queryResult, 'data.allMdx.edges', [])

  nodes.forEach(({ node }) => {
    const frontmatter = get(getNode(node.id), 'frontmatter', {})
    const template = get(frontmatter, 'template') || 'default'
    node.component = path.resolve(`./src/templates/${template}.tsx`)

    createPage({
      path: node.slug || '/',
      component: node.component,
      context: {
        id: node.id,
        ...frontmatter
      },
    })
  })
};
