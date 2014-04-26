define [
	'lodash'
	'jquery'
	'./plugin'
	], (_, $, Plugin) ->

		class ContactForm extends Plugin
			defaults:
				selector: "#contact-form"
				event: "submit"
				endpoint: ""
				apikey: null
				subject: "Contact form message"
				tags: [ 'contact-form' ]
				recipents: []

			items: []

			build: ->
				$(@selector).find("form")
					.on @event, (event) =>

						event.preventDefault()

						payload =
							key: @options.apikey
							message:
								text: form.find('#message').val()
								from_email: form.find('#email').val()
								from_name: form.find('#name').val()
								subject: @subject
								tags: @tags
								to: [
									email: @recipent.email
									name: @recipent.name
									type: @recipent.type
								]
								headers:
									"Reply-To": @form.find('#email').val()

						form.ajaxSend =>
							form.removeClass 'error success'
							form.addClass 'sending'

						$.post @endpoint, payload

							.done (response) =>
								form.removeClass 'error sending'
								form.addClass 'success'

							.fail (response) =>
								form.removeClass 'sending success'
								form.addClass 'error'

						form.find '.modal button'
							.on 'click', (event) =>
								console.log "click"
								@form.removeClass 'error success sending'

				return

		return ContactForm