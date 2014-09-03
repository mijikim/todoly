class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :todo
      t.boolean :completed, default: false

    end
  end
end
