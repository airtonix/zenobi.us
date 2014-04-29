require [
	'lodash'
	'jquery'
	'fastclick'
	'./lightbox'
	'./topbar'
	'./contact'
	'./tableofcontents'
	], (_, $, Fastclick, Lightbox) ->

		window.addEventListener 'load', (Event) ->
			Fastclick.attach document.body

		(($, window) ->

			$(".top-bar").topbar()
			$("[data-toc]").tableOfContents()
			$("[data-contact-form]").contactForm
				recipents: [
					email: "its@zenobi.us"
					name: "Zenobius Jiricek"
					type: 'to'
				]
				new Lightbox($ 'img')

			return

		) window.jQuery, window