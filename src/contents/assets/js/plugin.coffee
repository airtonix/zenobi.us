define [
	'lodash'
	'jquery'
	], (_, $) ->

		class Plugin
			# default settings for the plugin
			defaults:
				# simple title for the plugin
				name: "Unknown Plugin"
				# Which route is this plugin active on?
				route: "*"

			constructor: (@options) ->
				_.extend @, @defaults, @options
				@build()
				@run()
				@

			build: ->
			run: ->