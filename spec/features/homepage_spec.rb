require 'rails_helper'

describe "viewing the homepage" do
  it "allows a user to add todos", js: true do
    visit root_path
    expect(page).to have_content("Todoly")

    fill_in "todo", with: "Make breakfast"
    click_button "Create Todo"

    within "#todo-list" do
      expect(page).to have_content "Make breakfast"
    end
  end
end

