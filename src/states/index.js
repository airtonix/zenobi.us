import debug from 'debug';
import Vue from 'vue';
import VueRouter from 'vue-router';

const log = debug('app.states');

import * as names from './names';
import * as paths from './paths';

export const routes = [
	{
		name: names.HOME,
		path: paths.HOME,
		component: resolve => require(['../components/pages/home'], resolve),
		children: [
			{
				name: names.BLOG,
				path: paths.BLOG,
				component: resolve => require(['../components/pages/posts'], resolve),
			},
			{
				name: names.BLOG_DETAIL,
				path: paths.BLOG_DETAIL,
				component: resolve => require(['../components/pages/post'], resolve),
			},
		]
	},
	{ path: '*', redirect: paths.HOME }

];

Vue.use(VueRouter);
export const router = new VueRouter({
  routes,
  scrollBehaviour(to: object, from: object, saved: object) : object {
    log('VueRouter.scrollBehaviour', {
      to,
      from,
      saved
    });
    if (saved) {
      return saved;
    }
    return {
      x: 0,
      y: 0
    };
  }
});