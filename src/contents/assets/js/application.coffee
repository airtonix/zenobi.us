require [
	'zepto'
	'lodash'
	'fastclick'
	'./topbar'
	'./contact'
	], ($, _, fastclick) ->

		window.addEventListener 'load', (Event) ->
			fastclick.attach document.body
