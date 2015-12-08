require 'bundler'
Bundler.require

get '/' do
  erb :profile
end
