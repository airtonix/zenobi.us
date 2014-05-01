fs = require "fs"

module.exports = (env, done) ->
	preview = env.mode == 'preview'

	env.locals.pkg =
		bower:
			version: null
		npm:
			version: null

	fs.readFile "./package.json", (err, data) ->
		env.locals.pkg.npm = JSON.parse data

	fs.readFile "./bower.json", (err, data) ->
		env.locals.pkg.bower = JSON.parse data

	done()