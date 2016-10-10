import debug from 'debug';

import env from 'app/env';
import client from 'app/api/client';

const log = debug('app/api/methods/content');

/**
 * Get a page by id
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export function get(path) {
	if (!path) { return Promise.reject(); }
  return client
    .get(`${env.CONFIG.SERVICE_GITHUBAPI_URI}/contents/src/content/${path}`)
    .then((response) => {
      log('content.get.response', response);
      return response.json();
    });
}
