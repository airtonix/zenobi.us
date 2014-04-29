define [
	'lodash'
	'jquery'
	'./plugin'
	], (_, $, sumatra) ->

		sumatra.export 'contactForm', ->

			class ContactForm extends sumatra.Plugin
				action: 'submit'
				defaults:
					endpoint: null
					apikey: null
					subject: "Contact form message"
					tags: [ 'contact-form' ]
					recipents: []
					headers: {}

				perform: (Event) =>

					Event.preventDefault()

					from_subject = @options.subject
					from_message = @element.find('#message').val()
					from_email = @element.find('#email').val()
					from_name =  @element.find('#name').val()
					headers =
						"Reply-To": from_email

					payload =
						key: @options.apikey
						message:
							text: from_message
							from_email: from_email
							from_name: from_name
							subject: from_subject
							tags: @options.tags
							to: @options.recipents
							headers: _.extend headers, @options.headers or {}

					@element.ajaxSend =>
						@element.removeClass 'error success'
						@element.addClass 'sending'

					console.log @options

					$.post @options.endpoint, payload

						.done (response) =>
							@element.removeClass 'error sending'
							@element.addClass 'success'

						.fail (response) =>
							@element.removeClass 'sending success'
							@element.addClass 'error'
