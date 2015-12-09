class ProfilesController < ApplicationController

  get '/' do
    erb :profile
  end

  post '/create' do
    p params
    @users = User.new
    @users.user_name = params[:profile_name]
    @users.date_of_birth = params[:date_of_birth]
    @users.city = params[:city]
    @users.bio = params[:bio]
    @users.save
    erb :profile
  end

  get '/create' do
    @users = User.all
    erb :profile_create
  end


end
