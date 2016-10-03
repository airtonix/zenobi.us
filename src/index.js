/* @flow */

import 'babel-polyfill';
import debug from 'debug';
import Vue from 'vue';
import changeCase from 'change-case';

const log = debug('app.root');

import { router, } from './states';
import Store from './store';
log('RootComponent.store', Store);

const app = new Vue({
  router,

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
