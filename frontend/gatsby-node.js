// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { get } = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const urlSuffixIdea = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'suggestedURLSuffix',
      value: urlSuffixIdea,
    })
  }
}

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              suggestedURLSuffix
            },
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
      path: node.fields.suggestedURLSuffix,
      component: node.component,
      context: {
        id: node.id,
        ...frontmatter
      },
    })
  })
};
