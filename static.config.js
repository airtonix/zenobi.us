import path from 'path'

import axios from 'axios'
import { makePageRoutes } from 'react-static/node'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  
  getSiteData: () => ({
    title: 'Zenobi.us',
  }),

  getRoutes: async () => {
    // Fetch Posts
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    // Fetch Users
    const { data: users } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
  
    // Group posts by UserID
    const postsByUserID = {}
    posts.forEach(post => {
      postsByUserID[post.userId] = postsByUserID[post.userId] || []
      postsByUserID[post.userId].push(post)
    })
  
    return [
      {
        path: '/',
        template: 'src/components/Post/PostPage',
      },
      // Make an index route for every 5 blog posts
      ...makePageRoutes({
        items: posts,
        pageSize: 5,
        pageToken: 'page', // use page for the prefix, eg. blog/page/3
        route: {
          // Use this route as the base route
          path: 'blog',
          template: 'src/components/Page/Page',
        },
        decorate: (posts, i, totalPages) => ({
          // For each page, supply the posts, page and totalPages
          getData: () => ({
            posts,
            currentPage: i,
            totalPages,
          }),
        }),
      }),
      // Make the routes for each blog post
      ...posts.map(post => ({
        path: `/blog/post/${post.id}`,
        template: 'src/components/Post/PostPage',
        getData: () => ({
          post,
          user: users.find(user => user.id === post.userId),
        }),
      })),
    ]
  },

  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-mdx',
    ['react-static-plugin-sass', { }],
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages'),
      },
    ],
    'react-static-plugin-reach-router',
  ],
}