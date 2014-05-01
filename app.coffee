wintersmith = require "wintersmith"
path = require 'path'
_ = require 'lodash'

class Application
	wintersmith: null
	defaults:
		mode: 'preview'
	options: {}

	constructor: (options) ->
		@options = _.merge @defaults, options
		@configPath = "./src/config/#{@options.mode}.coffee"
		@config = require @configPath
		@wintersmith = wintersmith @config

	go: (error) =>
		if error
			throw error
		if @options.async?
			@options.async()
		
	help: () ->
		console.log "Require argument"
		if @options.async?
			@options.async()

	start: () ->
		switch @options.mode
			when "build" then @wintersmith.build @go
			when "preview" then @wintersmith.preview @go
			when "load" then @wintersmith.load @go
			else @help()

if !module.parent
	app = new Application(process.argv.slice 2)
	app.start()
else
	module.exports = Application
