wintersmith = require "wintersmith"
path = require 'path'
mode = process.env.NODE_ENV || 'development'
config = require "./src/config/#{mode}.coffee"
# // create the sites environment, can also be called with a config object. e.g.
# // {contents: '/some/contents', locals: {powerLevel: 10}}, ..}


({
	core: wintersmith config

	build: () ->
		@core.build (error) ->
			if error
				throw error;
			console.log 'Done!'

	preview: () ->
		@core.preview (error, server) ->
			if error
				throw error
			console.log 'Server running!'

	load: () ->
		@core.load (error, result) ->
			if error
				throw error
			console.log 'Contents loaded!'

	help: () ->
		console.log "Require argument"

	boot: (args) ->
		switch args[0]
			when "build" then @build()
			when "preview" then @preview()
			when "load" then @load()
			else @help()

}).boot process.argv.slice 2

