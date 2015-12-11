class EntriesController < ApplicationController
  # post '/get_place_id' do
  #   @entries = Entry.new
  #   @entries.title = params[:profile_name]
  #   @entries.entry_date = params[:entry_date]
  #   @entries.journal_snippet = params[:journal_snippet]
  #   @entries.google_place_id = params[:whatever]
  #   @entries.save
  #
  #   puts "-----------------------------------"
  #   puts params
  #   puts '--------------------------------------'
  #   redirect '/'
  # end

  get '/create_entry/db' do
    # title = Entry.find_by(title: 'Theory')
    one_entry = Entry.find(1)
    @place_id = one_entry[:google_place_id]
    p @place_id
  end

  get '/create_entry' do
    current_user = User.find(session[:user_name].id)
    p "=================="
    p @user_id = current_user.id
    p "======================"
    erb :create_entry
  end

  post '/create_entry' do
    # p params
    @entries = Entry.new
    @entries.user_id= params[:user_id]
    @entries.title = params[:title]
    @entries.entry_date = params[:entry_date]
    @entries.journal_snippet = params[:journal_snippet]
    @entries.google_place_id = params[:whatever]
    @entries.save
    binding.pry

    puts "-----------------------------------"
    p params
    puts '--------------------------------------'
    redirect '/profile'
  end

end
