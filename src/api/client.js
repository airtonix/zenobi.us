import Vue from 'vue';
import debug from 'debug';
import VueResource from 'vue-resource';

const log = debug('app/api/client');

Vue.use(VueResource);

function objectIterativeSetterFactory(facet) {
  let branch = Vue.http[facet];
  return function(map) {
    Object.keys(map)
      .forEach(key => {
        let value = map[key];
        log(`set${facet}`, key, value);
        branch[key] = value;
      });
  };
}

export const setOptions = objectIterativeSetterFactory('options');
export const setHeaders = objectIterativeSetterFactory('headers');


export default Vue.http;
