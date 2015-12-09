require 'sinatra/base'
require 'base64'

require('./controllers/application')
require('./controllers/user')
require('./controllers/profile')
require('./models/profile')
require('./models/user')

map('/') { run UsersController }
map('/profile') { run ProfilesController }
