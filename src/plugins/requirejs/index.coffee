_ = require 'lodash'
path = require 'path'
requirejs = require 'requirejs'


module.exports = (env, done) ->

	class RequireJsGenerator
		tree: {}

		constructor: (contents, callback) ->
			@discover()
			@createTree()
			callback(@tree)

	class RequireJsOutput extends env.plugin.Page
		constructor: (@type, @content) ->

		getFilename: ->
			options[@type]

		getView: -> (env, locals, contents, templates, callback) ->
			callback null, new Buffer @content


	env.registerGenerator 'requirejs', (contents, callback) -> new RequireJsGenerator(contents, callback)