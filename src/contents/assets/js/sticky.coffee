define [
	'lodash'
	'jquery'
	'./plugin'
	], (_, $, sumatra) ->
	
	
		sumatra.export 'sticky', ->

			class Sticky extends sumatra.Plugin
				action: null

				initialize: ->
					@marker = $ "<span class='sticky-marker'>"
					@element.before @marker
					@top = @element.offset().top
					@left = @element.offset().left
					@cssLeft = @element.css 'left'
					@element.css
						maxWidth: @element.width()
				
				scroll: (Event) =>
					if $(Event.target).scrollTop() > @top
						@element.addClass 'sticky'
						@element.css
							left: @left
					else
						@element.removeClass 'sticky'
						@element.css
							left: @cssLeft

				update: (Event) =>
					@left = @marker.offset().left
					@scroll(Event)

				bindEvents: ->
					$(window).on "resize.#{@name}", @update
					$(window).on "scroll.#{@name}", @scroll
					console.log "#{@name} ready"
					