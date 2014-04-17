require [
	'lodash'
	'jquery'
	], (_, $) ->

		class MandrillContactForm
			options:
				selector: "[data-mandrill='contact-form']"
				event: "submit"
				endpoint: "https://mandrillapp.com/api/1.0/messages/send.json"
				apikey: "oMstGBYNlE0KhW0DEd8Wdg"
			form: null

			constructor: ->
				@form = $(@options.selector)
				@form.on @options.event, (event) =>
					event.preventDefault()
					payload =
						key: @options.apikey
						message:
							text: @form.find('#message').val()
							from_email: @form.find('#email').val()
							from_name: @form.find('#name').val()
							subject: "Contact form message"
							tags: [ 'contact-form' ]
							to: [
								email: "its@zenobi.us"
								name: "Zenobius Jiricek"
								type: "to"
							]
							headers:
								"Reply-To": @form.find('#email').val()
					$.post @options.endpoint, payload, (response) ->
						console.log response

		new MandrillContactForm