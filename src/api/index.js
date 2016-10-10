import env from 'app/env';

import * as client from './client';
import * as content from './methods/content';
import * as contact from './methods/contact';

client.setOptions({
  root: env.CONFIG.APP__VALUE_API_ROOT
});

export default {
  content,
  contact,
};
