require [
	'lodash'
	'zepto'
	], (_, $) ->

		$("[data-mandrill]").on 'submit', (event) ->
			console.log event