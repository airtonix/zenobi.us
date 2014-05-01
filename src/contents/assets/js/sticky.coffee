define [
	'lodash'
	'jquery'
	'./plugin'
	], (_, $, sumatra) ->
	
	
		sumatra.export 'sticky', ->

			class Sticky extends sumatra.Plugin
				action: null
				defaults:
					selector: ".sticky"

				initialize: ->
					@top = @element.offset().top
					@left = @element.offset().left
					@cssLeft = @element.css 'left'
					@element.css
						maxWidth: @element.width()
						

				bindEvents: ->
					$(window).on "resize.#{@name}", (Event) =>
						@left 
					$(window).on "scroll.#{@name}", (Event) =>
						if $(event.target).scrollTop() > @top
							@element.addClass 'sticky'
							@element.css
								left: @left
						else
							@element.removeClass 'sticky'
							@element.css
								left: @cssLeft
						
					console.log "#{@name} ready"
					