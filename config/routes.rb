Rails.application.routes.draw do
  root :to => "home#show"

  delete "/todos/:todo" => "todos#destroy"

  resources :todos, {format: :json}


end
