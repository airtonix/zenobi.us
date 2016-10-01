import * as names from './names';
import * as paths from './paths';

export default [
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
