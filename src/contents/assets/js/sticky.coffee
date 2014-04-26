require [
	'lodash'
	'jquery'
	], (_, $) ->

		class StickyElement
			defaults:
				selector: ".sticky"

			constructor: (@options) ->

		new StickyElement