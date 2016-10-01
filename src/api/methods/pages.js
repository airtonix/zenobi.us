import debug from 'debug';
import client from '../client';

const log = debug('app/api/methods/pages');

/**
 * Get a page by id
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export function get(id) {
	return client
		.get(`pages/${id}`)
		.then( (response) => {
			log('pages.get.response', response);
			return response.json();
		});
}
