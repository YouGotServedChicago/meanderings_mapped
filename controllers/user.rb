class UsersController < ApplicationController

  def does_user_exist(username)
    user = User.find_by(:user_name => username)
    if user
      return true
    else
      return false
    end
  end

  get '/' do
    erb :index
  end

  get '/not_authorized' do
    erb :not_authorized
  end


  get '/profile_create' do
    erb :profile_create
  end

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

  post '/login' do
    user = User.authenticate(params[:user_name], params[:password])
      if user
        session[:current_user] = user
        redirect '/'
      else
        erb :login
        redirect '/already_exists'
      end
    end

get '/register' do
  erb :login
end

post '/register' do
  if does_user_exist(params[:user_name]) == true
    redirect '/already_exists'
  end
  user = User.create(user_email: params[:user_email], user_name: params[:user_name], password: params[:password])
  session[:current_user] = user
  redirect '/'
end

get '/already_exists' do
  erb :already_exists
end

get '/create_entry' do
  erb :create_entry
end




end
