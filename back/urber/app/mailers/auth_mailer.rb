class AuthMailer < ApplicationMailer
  def welcome_password(email, password)
    @password = password

    mail to: email
  end
end
