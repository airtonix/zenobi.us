/* @flow */

import 'babel-polyfill';
import debug from 'debug';
import Vue from 'vue';

const log = debug('app.root');

import { router, } from './states';
import Store from './store';
log('RootComponent.store', Store);

import 'vue-material-components/assets/css/materialize.min.css';

const app = new Vue({
  router,
  components: {
    App: (resolve: promise) : object => require(['./app'], resolve)
  }
});
app.$mount('#app');

log('RootComponent.mounted');

export default app;
