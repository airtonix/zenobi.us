require [
	'lodash'
	'jquery'
	'fastclick'
	'./topbar'
	'./contact'
	'./sidebar'
	], (_, $, fastclick) ->

		window.addEventListener 'load', (Event) ->
			fastclick.attach document.body
