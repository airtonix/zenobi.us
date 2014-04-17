require [
	'lodash'
	'jquery'
	'fastclick'
	'./topbar'
	'./contact'
	], (_, $, fastclick) ->

		window.addEventListener 'load', (Event) ->
			fastclick.attach document.body
