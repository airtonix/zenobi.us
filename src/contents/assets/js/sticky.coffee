require [
	'lodash'
	'jquery'
	], (_, $) ->

		class StickyElement
			defaults:
				selector: ".sticky"

			constructor: (@options) ->

		return StickyElement