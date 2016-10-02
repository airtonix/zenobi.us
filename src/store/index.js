import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import PagesModule from './pages';

export default new Vuex.store({
	strict: true,
  modules: {
    pages: PagesModule
  }
});