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

				bindEvents: ->
					super()
					@element.bind 'reset', =>
						@element.removeClass 'error success sending'

				field: (name, value) =>
					field = @element.find("[name='#{name}']")
					if not field
						throw new Error "Missing form field #{name}"
					if value?
						return field.val(value)
					return field.val()
						
				initialize: ->
					if not @modeIs('build')
						@field 'email', 'em@a.il'
						@field 'name', 'Ema il'
						@field 'message', 'Message'

					super()

				pending: ->
					@element.removeClass 'error success'
					@element.addClass 'sending'

				send: (data) ->
					$.post @options.endpoint, data
						.done @success
						.fail @failure

				success: (response)=>
					if response?[0].reject_reason
						@failure response

					else if response?[0].status is 'sent'
						@element.removeClass 'error sending'
						@element.addClass 'success'
					else
						@failure response

				failure: (response) =>
					@element.removeClass 'sending success'
					@element.addClass 'error'

				perform: (Event) =>
					Event.preventDefault()
					@pending()

					from_subject = @options.subject
					from_message = @field 'message'
					from_email = @field 'email'
					from_name =  @field 'from'
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
							to: @options.recipients
							headers: _.extend headers, @options.headers or {}

					@element.ajaxSend @pending

					if @options.apikey
						@send payload

					else if @options.fake
						console.log "Faking submission"
						_.chain [@pending, @failure, @success]
							.map (item) =>
								item.apply @
