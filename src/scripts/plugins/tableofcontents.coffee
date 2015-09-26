#
# System
#

#
# Framework
#
_ = require 'lodash'
$ = require 'jquery'

#
# Project
#
sumatra = require '../lib/plugin'
injectable = require '../lib/injectable'


sumatra.export 'tableOfContents', ->
	class TableOfContents extends sumatra.Plugin
		action: 'click'
		defaults:
			template: "<ol class='side-nav'></ol>"
			headings: "h2,h3,h4,h5,h6"
			toggle: '.toggle'
			content: '.content'

		initialize: ->
			@contents = $ @options.content
			@toggle = @element.find @options.toggle
			@list = $ @options.template
			@headings = @contents.find @options.headings
			@element.append @list

			if @headings.length > 0
				@element.addClass 'enabled'
				parent = @list
				@headings.each (index, item) =>
					heading = $ item
					nodename = heading.get(0)?.nodeName.toLowerCase()
					itemDepth = Number nodename.match /\d+/
					parentDepth = if parent then Number(parent.attr('depth')||0) else 0

					if parentDepth < itemDepth
						# going down into the chain
						pointer = @addList heading
						pointer.attr 'depth', itemDepth
						pointer.addClass "level-#{itemDepth}"
						parent.append $("<li>").append pointer
						pointer.attr 'up', parent
						parent = pointer
						dir = "down"

					if parentDepth == itemDepth
						parent.append @addItem heading

					if parentDepth > itemDepth
						# back up the chain
						parent.parent().parent().append @addItem heading
						parent = parent.parent().parent()
						dir = "up"

			else
				@list.remove()
				@toggle.remove()

		addList: (heading) ->
			list = $ "<ul>"
			list.append @addItem heading
			list

		addItem: (heading) ->
			$ "<li><a href='##{heading.attr('id')}'>#{heading.html()}</a></li>"

		bindEvents: ->
			if @element.hasClass 'enabled'

				$(document).on 'click.toc', (Event) =>
					isExpanded = @element.hasClass 'expanded'
					isToggle = Event?.target is @toggle.get(0) or @toggle.find(Event?.target).length

					if isToggle
						@element.toggleClass 'expanded'
					else if isExpanded
						@element.removeClass 'expanded'

	return TableOfContents