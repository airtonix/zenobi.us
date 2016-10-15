import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import context from './context';
import pages from './pages';
import navigation from './navigation';

export default new Vuex.Store({
  strict: true,
  modules: {
    context,
    pages,
    navigation,
  }
});