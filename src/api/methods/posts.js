import debug from 'debug';
import client from '../client';

const log = debug('app/api/methods/posts');

/**
 * Get a post by id
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export function get(id) {
	client
		.get(`posts/${id}`)
		.then( (response) => {
			log('posts.get.response', response);
			return response.json();
		})
		.catch( (err) => {
			log('posts.get.err', err);
			throw err;
		});
}
