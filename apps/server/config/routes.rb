Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  get 'generate_random_data', to: 'data#generate_random_data'
end
