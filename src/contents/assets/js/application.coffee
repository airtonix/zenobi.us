require [
	'zepto'
	'lodash'
	'fastclick'
	], ($, _, fastclick) ->

		#
		# Topbar
		#
		topbar = $("[data-topbar]")
		topbarToggle = $("[data-topbar] .toggle-topbar")
		topbarSection = $("[data-topbar] .top-bar-section")

		topbarToggle.on 'click', (Event) ->
			topbar.toggleClass 'expanded'

		window.addEventListener 'load', (Event) ->
			fastclick.attach document.body
