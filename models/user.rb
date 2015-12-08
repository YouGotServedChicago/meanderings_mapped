class User < ActiveRecord::Base

  include BCrypt

  def password=(pwd)
    self.password_digest = BCrypt::Password.create(pwd)
  end

  def password
    BCrypt::Password.new(self.password_digest)
  end

  def self.authenticate(user_email,password)
    current_user = Account.find_by(user_email: user_email)
    if (current_user == nil)
      return nil
    elseif (current_user.password == password)
      return current_user
    else
      return nil
    end
  end

end
