import debug from 'debug';

import api from 'app/api';
import changeCase from 'change-case';

const log = debug('app/components/pages/mixins');

export const PageMixins = {

  data() {
    return {
      Content: null,
    };
  },

  computed: {
    id() {
      return changeCase.paramCase(this.$route.name);
    }
  },

  beforeRouteEnter(to, from, next) {
    log('beforeRouteEnter', to);

    api.pages
      .get(to.name)
      .then(response => {
        next(vm => {
          vm.Content = response;
        });
      })
      .catch(() => next(false));
  },

  ready() {
    log('ready');
  }

};