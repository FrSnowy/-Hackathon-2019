module API
  module V1
    class APIController < ApplicationController
      include Responsable
      include ExceptionHandleable
      include AuthExceptionHandleable
      include TokenAuthenticatable
      include Pundit
    end
  end
end
