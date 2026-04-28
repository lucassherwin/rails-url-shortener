# frozen_string_literal: true

class HomeController < ApplicationController
  protect_from_forgery with: :exception
  allow_unauthenticated_access

  def index; end
end
