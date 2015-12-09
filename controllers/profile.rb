class ProfilesController < ApplicationController

  get '/' do
    @profiles = Profile.all
    erb :profile
  end

  post '/' do
    p params
    @profiles = Profile.where("profile_name = ?", params[:profile_name])
    @profiles.profile_name = params[:profile_name]
    @profiles.date_of_birth = params[:date_of_birth]
    @profiles.city = params[:city]
    @profiles.bio = params[:bio]
    @profiles.image = params[:image]
    @profiles.base_64_image = params[:image_as_base64]
    @profiles.save
  end

  get '/create' do
    erb :profile_create
  end

  post '/create' do
    p params
    @profiles = Profile.new
    @profiles.profile_name = params[:profile_name]
    @profiles.date_of_birth = params[:date_of_birth]
    @profiles.city = params[:city]
    @profiles.bio = params[:bio]
    @profiles.image = params[:image]
    @profiles.base_64_image = params[:image_as_base64]
    @profiles.save
    erb :profile_create
  end


end
