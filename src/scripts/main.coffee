
require './plugins/'

window.addEventListener 'load', (Event) ->
	Fastclick.attach document.body

$doc = $(document)

$doc.on 'ready', ->

	$(document).events()
	$("[data-module*='top-bar']").topbar()
	$("[data-module*='toc']").tableOfContents()
	$("[data-module*='contact-form']").contactForm()
	new Lightbox($ 'img')
	$("[data-module*='sticky']").sticky()
	$("[data-module*='modal']").modal()
	$("[data-module*='disqus-comments-widget']").disqusComments()

	return

