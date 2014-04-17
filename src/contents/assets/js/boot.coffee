require.config
	paths:
		'jquery': '../vendor/jquery/dist/jquery.min'
		'lodash': '../vendor/lodash/dist/lodash.underscore.min'
		'fastclick': '../vendor/fastclick/lib/fastclick'
		'marked': '../vendor/marked/lib/marked'
		'underscore-query': '../vendor/underscore-query/underscore-query'

		'application': './application'

	shim :
		'lodash': exports: '_'
		'jquery': exports: '$'
		'underscore-query': deps: [ 'lodash']

	urlArgs: "bust=" +  (new Date()).getTime()
	deps: [ 'application' ]
