require.config
	paths:
		'jquery': '/vendor/jquery/dist/jquery.min'
		'lodash': '/vendor/lodash/dist/lodash.underscore.min'
		'fastclick': '/vendor/fastclick/lib/fastclick'
		'marked': '/vendor/marked/lib/marked'
		'underscore-query': '/vendor/underscore-query/underscore-query'
		'scout': '/vendor/Scout/jquery.fs.scout'
		'google-analytics': '//www.google-analytics.com/analytics'
		'application': './application'

	shim :
		'lodash': exports: '_'
		'jquery': exports: '$'
		'underscore-query': deps: [ 'lodash']
		'scout': deps: ['jquery', 'google-analytics']
		'google-analytics': exports: 'ga'

	# this is only for local development, never rely on this
	# in production.
	urlArgs: "bust=" +  (new Date()).getTime()
	deps: [ 'application' ]
