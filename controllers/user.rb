class UsersController < ApplicationController

  def get_current_user_if_exists
    if session[:user_name]
      return session[:user_name]
    else
      return nil
    end
  end

  def set_current_user_and_login(user_object)
    session[:user_name] = user_object
  end

  def log_current_user_out
    if get_current_user_if_exists == nil
      return false
    else
      session[:user_name] = nil
      return true
    end
  end

  get '/' do
    erb :index
  end

  get '/logout' do
    p "you have been logged out"
    log_current_user_out
    redirect '/'
  end

  get '/login' do
    erb :login
  end

  get '/register' do
    erb :login
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

  post '/login' do
    attempt = User.authenticate(params[:user_name], params[:password])
    set_current_user_and_login(attempt)
    redirect '/profile'
  end

  post '/register' do
    attempt = User.register(params[:user_name], params[:user_email], params[:password])
    if (attempt == false)
      set_app_message('An issue has arisen with your registration. Please try again!')
    else
      set_current_user_and_login(attempt)
      puts "new user registered!!!"
  end
  redirect '/profile/create'
end



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


end
