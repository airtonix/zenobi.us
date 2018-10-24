import Config from 'webpack-config';
import { reloadRoutes } from 'react-static/node'
import chokidar from 'chokidar'
import glob from 'glob'
import matter from 'front-matter';
import fs from 'fs';


chokidar.watch(`${process.cwd()}/src`)
    .on('all', () => reloadRoutes())

function contentQuery (pattern) {
    return glob.sync(pattern)
        .map(path => {
            return {
                path,
                body: fs.readFileSync(path, 'utf8')
            };
        })
        .filter(data => !!data.body)
        .map(({path, body}) => {
            const data = typeof body == 'string' &&
                matter(body) ||
                {body};
            return {
                path,
                ...data
            };
        })
        .map(({path, attributes = {}, body}) => {
            const {component} = attributes;
            const url = path
                .replace(`${process.cwd()}/src/content`, '')
                .replace(/.(jsx?|mdx?)/, '')
                .replace(/\/index/, '/');

            return {
                path: url,
                slug: attributes.title && attributes.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
                component: component || `${process.cwd()}/src/components/page/Page`,
                getData: async () => ({attributes, body})
            };
        });
}

export default {

    getSiteDate: async ({ dev }) => {
      return {
        title: 'My Awesome Website',
        lastBuilt: Date.now()
      };
    },

    getRoutes: async ({dev}) => {
        const routes = contentQuery(`${process.cwd()}/src/content/**/*.md`)
        console.log(routes);
        return routes;
    },

    webpack (config, {defaultLoaders, stage}) {
        return new Config()
            .merge(config)
            .extend(`${__dirname}/webpack/${stage}/index.js`);
    }
};
