require.config
	paths:
		'lodash': '../vendor/lodash/dist/lodash.underscore.min'
		'marked': '../vendor/marked/lib/marked'
		'underscore-query': '../vendor/underscore-query/underscore-query'

		'application': './application'

	shim :
		'lodash': exports: '_'
		'underscore-query':  deps: [ 'lodash']

	urlArgs: "bust=" +  (new Date()).getTime()
	deps: [ 'application' ]
