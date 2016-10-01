import Vuex from 'vuex';

import PagesModule from './pages';

export default new Vuex.store({
	modules: {
		pages: PagesModule
	}
});