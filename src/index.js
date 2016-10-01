import 'babel-polyfill';
import debug from 'debug';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import routes from './states';
import App from './app';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	scrollBehaviour (to, from, saved) {
		if (saved) { return saved; }
		return {x: 0, y: 0};
	}
});

const app = new Vue({
		router,
		components: { App }
	})
	.$mount('#app');

export default app;
