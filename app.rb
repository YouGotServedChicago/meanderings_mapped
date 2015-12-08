require 'bundler'
Bundler.require

get '/' do
  erb :login
end
