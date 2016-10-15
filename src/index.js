/* @flow */
import 'app/styles/screen';

import 'babel-polyfill';
import debug from 'debug';
import Vue from 'vue';
import changeCase from 'change-case';

const log = debug('app.root');

import { router, } from './states';
import Store from './store';
import './validation';
log('RootComponent.store', Store);

Vue.mixin({

  data() {
    return {
      // ENV: process.env
    };
  },

  methods: {
    toJson(data: any): object {
      return JSON.parse(JSON.stringify(data));
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
