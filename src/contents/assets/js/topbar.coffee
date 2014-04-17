require [
	'lodash'
	'jquery'
	], (_, $) ->

		#
		# Topbar
		#
		topbar = $("[data-topbar]")
		topbarToggle = $("[data-topbar] .toggle-topbar")
		topbarSection = $("[data-topbar] .top-bar-section")

		topbarToggle.on 'click', (Event) ->
			topbar.toggleClass 'expanded'
