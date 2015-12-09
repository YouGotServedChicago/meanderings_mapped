class EntriesController < ApplicationController

  get '/create_entry' do
    erb :create_entry
  end

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

  post '/create_entry' do
    @entries = Entry.new
    @entries.title = params[:entry_title]
    @entries.entry_date = params[:entry_date]
    @entries.journal_snippet = params[:journal_snippet]
    @entries.google_place_id = params[:whatever]
    @entries.save

    puts "-----------------------------------"
    puts params
    puts '--------------------------------------'
    redirect '/'
  end

end
