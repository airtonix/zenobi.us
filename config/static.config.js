import fs from 'fs';
import Config from 'webpack-config';
import { reloadRoutes } from 'react-static/node';
import chokidar from 'chokidar';
import glob from 'glob';
import {dirname} from 'path';
import {renderMdx, mdxToComponent} from 'react-static-markdown';
import matter from 'gray-matter';


chokidar.watch(`${process.cwd()}/src`)
    .on('all', () => reloadRoutes())

function contentQuery (patterns) {
    return glob
        .sync(patterns)
        .map(path => {
            const {data, content} = matter(fs.readFileSync(path, 'utf8'));
            return Object.assign({
                content: renderMdx(content),
                path
            }, data);
        })
        .map((page) => {
            if (page.children) {
                console.log('querying', page.children);
                page.children = contentQuery(`${dirname(page.path)}/${page.children}`)
            }
            return page;
        })
        .map((page) => {
            const url = page.path
                .replace(`${process.cwd()}/src/content`, '')
                .replace(/.(jsx?|mdx?)/, '')
                .replace(/\/index/, '/');

            return {
                path: url,
                slug: page.title && page.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') || '',
                component: page.component || `${process.cwd()}/src/components/page/Page`,
                children: page.children || [],
                getData: async () => page
            };
        });
}

export default {

    siteRoot: '/',
    stagingSiteRoot: '/',
    paths: {
        dist: `${process.cwd()}/dist`
    },

    getSiteDate: async ({ dev }) => {
      return {
        title: 'My Awesome Website',
        lastBuilt: Date.now()
      };
    },

    getRoutes: async ({dev}) => {
        const routes = await contentQuery(`${process.cwd()}/src/content/*.{mdx,md}`)
        console.log(routes);
        return routes;
    },

    webpack (config, {defaultLoaders, stage}) {
        return new Config()
            .merge(config)
            .extend(`${__dirname}/webpack/dev/index.js`);
    }
};
