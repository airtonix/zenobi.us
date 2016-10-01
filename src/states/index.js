import * as names from './names';
import * as paths from './paths';

export default [
	{
		path: paths.HOME,
		name: names.HOME,
		component: resolve => require(['../components/pages/home'], resolve),
	},
	{
		path: paths.POST,
		name: names.POST,
		component: resolve => require(['../components/pages/post'], resolve),
	},
	{ path: '*', redirect: paths.HOME }

];
