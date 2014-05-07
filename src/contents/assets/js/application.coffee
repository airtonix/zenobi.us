require [
	'lodash'
	'jquery'
	'fastclick'
	'./lightbox'
	'./topbar'
	'./contact'
	'./sticky'
	'./modal'
	'./events'
	'./tableofcontents'
	], (_, $, Fastclick, Lightbox) ->

		window.addEventListener 'load', (Event) ->
			Fastclick.attach document.body

		(($, window) ->
			$ document
				.ready ->
					$(document).events()
					$("[data-module='top-bar']").topbar()
					$("[data-module='toc']").tableOfContents()
					$("[data-module='contact-form']").contactForm
						recipents: [
							email: "its@zenobi.us"
							name: "Zenobius Jiricek"
							type: 'to'
						]
					new Lightbox($ 'img')
					$("[data-module='sticky']").sticky()
					$("[data-module='modal']").modal()

					return

		) window.jQuery, window