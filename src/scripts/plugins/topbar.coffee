#
# System
#

#
# Framework
#
_ = require 'lodash'
$ = require 'jquery'

#
# Project
#
sumatra = require '../lib/plugin'
injectable = require '../lib/injectable'


sumatra.export 'topbar', ->

	class TopBar extends sumatra.Plugin
		action: 'click'
		defaults:
			class: 'expanded'
			selector: '.toggle-topbar'

		bindEvents: ->
			@element.delegate @options.selector, @action, (Event) =>
				Event.preventDefault()
				@element.toggleClass @options.class

			@element.on 'close', =>
				@element.removeClass @options.class
