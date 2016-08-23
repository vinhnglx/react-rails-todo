Rails.application.routes.draw do
  api_version(:module => "V1", :path => {:value => "v1"}, :defaults => {:format => "json"}) do
  end
  root 'home#index'

  devise_for :users
end
