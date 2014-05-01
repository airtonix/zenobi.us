require [
	'lodash'
	'jquery'
	'fastclick'
	'./lightbox'
	'./topbar'
	'./contact'
	'./sticky'
	'./tableofcontents'
	], (_, $, Fastclick, Lightbox) ->

		window.addEventListener 'load', (Event) ->
			Fastclick.attach document.body

		(($, window) ->
			$ document
				.ready ->

					$("[data-top-bar]").topbar()
					$("[data-toc]").tableOfContents()
					$("[data-contact-form]").contactForm
						recipents: [
							email: "its@zenobi.us"
							name: "Zenobius Jiricek"
							type: 'to'
						]
					new Lightbox($ 'img')
					$("[data-sticky]").sticky()

					return

		) window.jQuery, window