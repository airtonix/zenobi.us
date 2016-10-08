import debug from 'debug';

import env from 'app/env';
import client from '../client';

const log = debug('app/api/methods/contact');

/**
 * Post contact payload to formspree.io
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export function post(data) {
  return client
    .post(env.CONFIG.APP__SERVICE_FORMSPREE_URI, data)
    .then((response) => {
      log('contact.post.response', response);
      return response.json();
    });
}
