class Profile < ActiveRecord::Base
  belongs_to :user

  def get_users_age(birthdate)
    return Time.now.to_s.split('-')[0].to_i - birthday.to_s.split('-')[0].to_i
  end
  #Profile.get_users_age(name_of_model.birthdate)

end
