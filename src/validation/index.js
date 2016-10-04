import Vue from 'vue';
import VeeValidate from 'vee-validate';

const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'en',
  messages: null,
  strict: true
};

Vue.use(VeeValidate, config);


export default {};