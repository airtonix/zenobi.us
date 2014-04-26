define [
	'lodash'
	'jquery'
	'./plugin'
	], (_, $, Plugin) ->

		class TopBar extends Plugin
			items: []
			defaults:
				events: 'click'
				toggleClass: 'expanded'
				selectors:
					topbar: "[data-topbar]"
					toggle: ".toggle-topbar"
					section: ".top-bar-section"

			build: () ->
				topbar = $ @selectors.topbar
				topbar.toggle = topbar.find @selectors.toggle
				topbar.section = topbar.find @selectors.section
				@items.push topbar

			run: () ->
				for item in @items
					item.toggle.on @events, (Event) =>
						item.toggleClass @toggleClass
