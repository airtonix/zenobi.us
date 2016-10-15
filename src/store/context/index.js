export default {
  state: {
    ...Context
  },
  actions: {},
  getters: {
    isDev: state => state.ENV === state.ENV_NAME__DEV,
    isProd: state => state.ENV === state.ENV_NAME__PROD,
  },
  mutations: {}
};

