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
	'./disqus'
	'./tableofcontents'
	'scout'
	], (_, $, Fastclick, Lightbox) ->

		window.addEventListener 'load', (Event) ->
			Fastclick.attach document.body

		(($, window) ->
			$ document
				.ready ->

					$.scout()
					$(document).events()
					$("[data-module*='top-bar']").topbar()
					$("[data-module*='toc']").tableOfContents()
					$("[data-module*='contact-form']").contactForm()
					new Lightbox($ 'img')
					$("[data-module*='sticky']").sticky()
					$("[data-module*='modal']").modal()
					$("[data-module*='disqus-comments-widget']").disqusComments()
					$("[data-module*='disqus-comments-count']").disqusCounter()

					return

		) window.jQuery, window