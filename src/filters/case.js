import debug from 'debug';

import Vue from 'vue';
import changeCase from 'change-case';

const log = debug('app/filters/case');

Object.keys(changeCase)
	.filter((key) => key.indexOf('Case') > 0)
	.forEach((key) => {
		log('registering', key);
		Vue.filter(key, changeCase[key]);
	});
