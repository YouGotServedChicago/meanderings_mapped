require 'sinatra/base'
require 'base64'

require('./controllers/application')
require('./controllers/user')
require('./models/user')

map('/') { run UserController }
