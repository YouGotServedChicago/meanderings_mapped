require 'sinatra/base'
require 'base64'

require('./controllers/application')
require('./controllers/user')
require('./controllers/profile')
require('./controllers/entry')
require('./models/profile')
require('./models/user')
require('./models/entry')

map('/') { run UsersController }
map('/profile') { run ProfilesController }
map('/entry') { run EntriesController }
