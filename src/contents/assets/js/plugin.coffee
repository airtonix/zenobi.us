define [
  'lodash'
  'jquery'
  ], (_, $) ->

    class @Plugin
      action: null
      defaults: {}

      constructor: (current_element, index_of_query, init_options) ->
        @element = $ current_element
        @index = index_of_query
        @options = _.extend @defaults, init_options
        @options = _.extend @options, @element.data() or {}
        @initialize() and @bindEvents()
        @element.addClass "#{@constructor.name.toLowerCase()}-enabled"

      initialize: ->
        true

      bindEvents: ->
        if @action?
          @element.on @action, @perform

      perform: null

    @export = (plugin_name, plugin_code) ->
      # Instantiate a PluginHelper and apply the current scope. This can
      # be any object that responds to 3 parameters in its constructor
      # and will be set to whatever is returned by `plugin_code()`.
      PluginHelper = plugin_code.apply this

      jQuery.fn[plugin_name] = (options={}) ->
        @each (index, element) ->
          # For each element, create a `PluginHelper` instance
          # of the passed-in `plugin_code` and apply the jQuery
          # plugin parameters to the constructor.
          new PluginHelper(element, index, options)

    @