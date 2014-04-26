require [
	'lodash'
	'jquery'
	'fastclick'
	'./topbar'
	'./contact'
	'./tableofcontents'
	], (_, $, Fastclick, TopBar, ContactForm, TableOfContents) ->

		window.addEventListener 'load', (Event) ->
			Fastclick.attach document.body

		$ document
			.ready () ->
				new TopBar
				new ContactForm
					apikey: "oMstGBYNlE0KhW0DEd8Wdg"
					endpoint: "https://mandrillapp.com/api/1.0/messages/send.json"
					recipents: [
						email: "its@zenobi.us"
						name: "Zenobius Jiricek"
						type: 'to'
					]
				new TableOfContents
				return