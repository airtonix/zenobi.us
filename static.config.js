import path from 'path'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  
  getSiteData: () => ({
    title: 'Zenobi.us',
  }),

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