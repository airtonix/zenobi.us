/* @flow */
import 'app/styles/screen';

import 'babel-polyfill';
import debug from 'debug';
import Vue from 'vue';
import changeCase from 'change-case';
import analytics from 'universal-ga';

const log = debug('app.root');

import env from './env';
import { router, } from './states';
import Store from './store';
import './validation';

log(env.CONFIG.SERVICE_GOOGLEANALYTICS_KEY);
analytics.initialize(env.CONFIG.SERVICE_GOOGLEANALYTICS_KEY);

Vue.mixin({

  data () : object {
    return {
    };
  },

  methods: {
    toJson(data: any): object {
      return JSON.parse(JSON.stringify(data));
    },
    Context (key: string) : any {
      log('Context.reduction', env, key);
      let result = key &&
        typeof key === 'string' &&
        key.split('.')
          .reduce( (obj: object, part: string) : any => {
            if (!obj || !obj[part]) { return false; }
            return obj[part];
          }, env);
      log('Context.result', result);
      return result;
    }
  }

});

const app = new Vue({
  router,
  store: Store,
  computed: {
    routeClass() : string {
      return `route--${changeCase.paramCase(this.$route.name)}`;
    }
  },

  components: {
    App: (resolve: promise) : object => require(['./app'], resolve)
  }

});
app.$mount('#app');

log('RootComponent.mounted');
export default app;
