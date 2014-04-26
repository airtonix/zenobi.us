require [
	'lodash'
	'jquery'
	], (_, $) ->

		class MandrillContactForm
			options:
				selector: "#contact-form"
				event: "submit"
				endpoint: "https://mandrillapp.com/api/1.0/messages/send.json"
				apikey: "oMstGBYNlE0KhW0DEd8Wdg"
			form: null

			constructor: ->
				@form = $(@options.selector)
				@form.find("form").on @options.event, (event) =>
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

					@form.ajaxSend =>
						@form.removeClass 'error success'
						@form.addClass 'sending'
					$.post @options.endpoint, payload
						.done (response) =>
							@form.removeClass 'error sending'
							@form.addClass 'success'
						.fail (response) =>
							@form.removeClass 'sending success'
							@form.addClass 'error'


				@form.find '.modal button'
					.on 'click', (event) =>
						console.log "click"
						@form.removeClass 'error success sending'

		new MandrillContactForm