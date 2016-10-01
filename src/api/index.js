import env from 'application/env';

import * as client from './client';

import * as pages from './methods/pages';
import * as posts from './methods/posts';

client.setOptions({
	root: env.APP__VALUE_API_ROOT
});

export default {
	pages,
	posts,
};