require.config
	paths:
		'jquery': "../../vendor/jquery/dist/jquery.min"
		'lodash': "../../vendor/lodash/dist/lodash.underscore.min"
		'fastclick': "../../vendor/fastclick/lib/fastclick"
		'scout': "../../vendor/Scout/jquery.fs.scout"
		'application': './application'

	shim :
		'lodash': exports: '_'
		'jquery': exports: '$'
		'google-analytics': exports: 'ga'
		'scout': deps: ['jquery']
		'application': deps: ['lodash', 'jquery', 'scout']

	# this is only for local development, never rely on this
	# in production.
	urlArgs: "bust=" +  (new Date()).getTime()
	deps: [ 'application' ]
