import debug from 'debug';
import Vue from 'vue';
import tinydown from 'tinydown';

const log = debug('app/filters/markdown');

log('registering tinydown');
Vue.filter('markdown', (value) => tinydown(value || ''));
