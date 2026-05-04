class AddGuestTokenToShortUrls < ActiveRecord::Migration[8.1]
  def change
    add_column :short_urls, :guest_token, :string
    add_index :short_urls, :guest_token
  end
end
