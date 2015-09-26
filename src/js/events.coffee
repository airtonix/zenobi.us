define [
    'lodash'
    'jquery'
    './plugin'
    ], (_, $, sumatra) ->
        
        sumatra.export 'events', ->

            class EventDispatcher extends sumatra.Plugin
                event: null

                initialize: =>
                    pattern = /([\w+\=\-\[\]\"]+)\:(\w+)/
                    actionables = @element.find "[data-action]"

                    actionables.each (index, item) =>
                        $item = $ item
                        action = $item.data 'action'

                        $item.on action, =>
                            if $item.data('emit')?
                                [_s, target, emit] = $item.data('emit').match pattern
                                if emit?
                                    $(target).trigger emit

                            if $item.data('load')?
                                [_s, target, load] = $item.data('load').match pattern
                                if load?
                                    $(target).load load
                                    