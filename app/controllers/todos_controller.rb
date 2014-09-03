class TodosController < ApplicationController
  respond_to :json

  def index
    todos = Todo.all
    render json: todos
  end

  def create
    todo = Todo.create(todo: params[:todo])
    if todo.persisted?
      render json: todo
    else
      render json: { errors: todo.errors.full_messages }, status: 422
    end
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(completed: 1)
    render json: todo
  end

  def destroy
    todo = Todo.find_by(todo: params[:todo])
    todo.destroy
    render json: todo
  end

end