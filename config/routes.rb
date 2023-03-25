Rails.application.routes.draw do
  resources :posts
  root 'components#index'
end
