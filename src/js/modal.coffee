define [
    'lodash'
    'jquery'
    './plugin'
    ], (_, $, sumatra) ->
        
        sumatra.export 'modal', ->
        
            class ModalPlugin
                bindEvents: ->
                    @element.find '.close-modal', =>
                        $(this).click => @element.removeClass 'active'
                        
                    @element.bind 'modal-off', () ->
                        console.log arguments

                modalOn: ->
                    @element.addClass 'active'

                eventOff: ->
                    @element.removeClass 'active'

        