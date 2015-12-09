class ProfilesController < ApplicationController

  get '/' do
    erb :profile
  end

  get '/create' do
    erb :profile_create
  end

  post '/create' do
    puts "----------------"
    puts params
    puts "-----------------"
    @profiles = Profile.new
    @profiles.profile_name = params[:profile_name]
    @profiles.date_of_birth = params[:date_of_birth]
    @profiles.city = params[:city]
    @profiles.bio = params[:bio]
    @profiles.image = params[:image]
    @profiles.base_64_image = params[:image_as_base64]
    @profiles.save
    erb :profile
  end

end
