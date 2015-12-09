class UsersController < ApplicationController

  get '/' do
    erb :index
  end

  get '/not_authorized' do
    erb :not_authorized
  end

  
  # get '/profile_create' do
  #   erb :profile_create
  # end

  # post '/profile_create' do
  #   if does_user_exist(params[:user_name]) == true
  #     redirect '/user/login'
  #   end
  #   user = Account.create(user_name: params[:user_name], password: params[:password], date_of_birth: params[:date_of_birth], city: params[:city], state_province: params[:state_province], country: params[:country], bio: params[:bio])
  #   session[:current_user] = user
  #   redirect '/'
  # end



  get '/login' do
    erb :login
  end

  post 'login' do
    user = Account.authenticate(params[:user_emamil], params[:password])
      if user
        session[:current_user] = user
        redirect '/'
      else
        erb :login
        # redirect '/user/profile_create'
      end
    end


end
