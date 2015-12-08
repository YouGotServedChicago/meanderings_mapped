require 'sinatra/base'

require('./controllers/application')
require('./controllers/user')
require('./models/user')

map('/') { run UsersController }
