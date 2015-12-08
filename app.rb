require 'bundler'
Bundler.require

get '/' do
  everything = {:awesome => 7}.to_json
end
