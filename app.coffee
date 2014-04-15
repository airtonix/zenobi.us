wintersmith = require "wintersmith"
path = require 'path'
_ = require 'lodash'

class Application
	wintersmith: null

	constructor: (@options) ->
		console.log @options
		@configPath = "./src/config/#{@options.mode}.coffee"
		@config = require @configPath
		@wintersmith = wintersmith @config
		console.log "Wintersmith loaded: #{@configPath}"

	build: () ->
		self = @
		@wintersmith.build (error) ->
			if error
				throw error;
			console.log 'Done!'
			if not _.isNull self.options.async
				self.options.async()

	preview: () ->
		@wintersmith.preview (error, server) ->
			if error
				throw error
			console.log 'Server running!'

	load: () ->
		self = @
		@wintersmith.load (error, result) ->
			if error
				throw error
			console.log 'Contents loaded!'
			if self.options.async
				self.options.async()

	help: () ->
		console.log "Require argument"
		if @options.async
			@options.async()

	start: () ->
		console.log "#{@options.mode} Requested"
		switch @options.mode
			when "build" then @build()
			when "preview" then @preview()
			when "load" then @load()
			else @help()


if not module.parent
	app = new Application(process.argv.slice 2)
	app.start()
else
	module.exports = Application
