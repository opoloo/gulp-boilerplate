$(document).ready ->
  app.init()

app =
  init: ->
    @bind_events()

  bind_events: ->
    # Do stuff