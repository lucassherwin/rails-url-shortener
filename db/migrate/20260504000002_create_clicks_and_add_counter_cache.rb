class CreateClicksAndAddCounterCache < ActiveRecord::Migration[8.1]
  def change
    add_column :short_urls, :clicks_count, :integer, null: false, default: 0

    create_table :clicks do |t|
      t.references :short_url, null: false, foreign_key: true
      t.string :referrer
      t.text :user_agent
      t.string :ip_address
      t.datetime :clicked_at, null: false
      t.timestamps
    end

    add_index :clicks, :clicked_at
    add_index :clicks, [ :short_url_id, :clicked_at ]
  end
end
