vendorPath = '../../vendor/'

require.config
	paths:
		'jquery': "#{vendorPath}jquery/dist/jquery.min"
		'lodash': "#{vendorPath}lodash/dist/lodash.underscore.min"
		'fastclick': "#{vendorPath}fastclick/lib/fastclick"
		'scout': "#{vendorPath}Scout/jquery.fs.scout"
		'google-analytics': "//www.google-analytics.com/analytics"
		'application': './application'

	shim :
		'lodash': exports: '_'
		'jquery': exports: '$'
		'google-analytics': exports: 'ga'
		'scout': deps: ['jquery', 'google-analytics']
		'application': deps: ['lodash', 'jquery', 'scout']

	# this is only for local development, never rely on this
	# in production.
	urlArgs: "bust=" +  (new Date()).getTime()
	deps: [ 'application' ]
