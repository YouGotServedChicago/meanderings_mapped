class User < ActiveRecord::Base

  include BCrypt

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def password
    BCrypt::Password.new(self.password_digest)
  end

  def self.authenticate(user_name, password)
    user = User.find_by(user_name: user_name)
    if user.password == password
      return user
    else
      return nil
    end
  end

  def self.register(user_name, user_email, password)
    new_user = User.create(user_name: user_name, user_email: user_email, password: password)
    new_user.save

    if (new_user.user_name == user_name)
      return new_user
    else
      return false
    end
  end

end
