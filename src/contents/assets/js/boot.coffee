require.config
	paths:
		'zepto': '../vendor/zepto/zepto.min'
		'lodash': '../vendor/lodash/dist/lodash.underscore.min'
		'fastclick': '../vendor/fastclick/lib/fastclick'
		'marked': '../vendor/marked/lib/marked'
		'underscore-query': '../vendor/underscore-query/underscore-query'

		'application': './application'

	shim :
		'lodash': exports: '_'
		'zepto': exports: '$'
		'underscore-query':  deps: [ 'lodash']

	urlArgs: "bust=" +  (new Date()).getTime()
	deps: [ 'application' ]
