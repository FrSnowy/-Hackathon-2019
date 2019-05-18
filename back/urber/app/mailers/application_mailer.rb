# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "#{I18n.t('mailer.from_name')} <#{CONFIG[:mail_from]}>"
  layout 'mailer'
end
