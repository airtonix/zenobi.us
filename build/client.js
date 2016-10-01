/* eslint-disable */
require('eventsource-polyfill')
require('webpack-hot-middleware/client?overlay=true&reload=true')
	.subscribe(function (event) {
		if (event.action === 'reload') {
			window.location.reload()
		}
	});
