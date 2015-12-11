class ProfilesController < ApplicationController

  get '/' do
    if session
      @profiles = Profile.where(user_id: session[:user_name].id)
      @entries = Entry.where(user_id: session[:user_name].id)
      p "++++++++++++HEEEEYYYYOOOO!!!!++++++++++"
      p @entries
    else
      @profiles = Profile.all
    end
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
    current_user = User.find(session[:user_name].id)
    p "uerahjkbdfjzkilkbaedizhkreafhudjkaf================="
    p @user_id = current_user.id
    p "======================"
    erb :profile_create
  end

  post '/create' do
    p params
    @profiles = Profile.new
    @profiles.user_id = params[:user_id]
    @profiles.profile_name = params[:profile_name]
    @profiles.date_of_birth = params[:date_of_birth]
    @profiles.city = params[:city]
    @profiles.bio = params[:bio]
    @profiles.image = params[:image]
    @profiles.base_64_image = params[:image_as_base64]
    @profiles.save
    #erb :profile_create
    #binding.pry
    redirect '/profile'
  end


end
