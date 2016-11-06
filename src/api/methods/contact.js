import debug from 'debug';

import env from 'app/env';
import client from 'app/api/client';

const log = debug('app/api/methods/contact');

/**
 * Post contact payload to formspree.io
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export function post(data) {
	log('contact.post.before', data, env);
  return client
    .post(env.CONFIG.SERVICE_FORMSPREE_URI, data)
    .then((response) => {
      log('contact.post.response', response);
      return response.json();
    });
}
