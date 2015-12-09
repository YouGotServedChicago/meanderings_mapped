class User < ActiveRecord::Base

  include BCrypt

  def password=(pwd)
    self.password_digest = BCrypt::Password.create(pwd)
  end

  def password
    BCrypt::Password.new(self.password_digest)
  end

  def self.authenticate(user_name,password)
    current_user = User.find_by(user_name: user_name)
    if (current_user == nil)
      return nil
    elsif (current_user.password == password)
      return current_user
    else
      return nil
    end
  end

end
