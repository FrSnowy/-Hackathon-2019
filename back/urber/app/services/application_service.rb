class ApplicationService
  protected

  def request
    Req[:request]
  end

  def session
    request.session
  end
end
