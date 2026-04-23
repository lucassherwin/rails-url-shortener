class CreateShortUrls < ActiveRecord::Migration[8.1]
  def change
    create_table :short_urls do |t|
      t.string :long_url
      t.string :alias
      t.datetime :expires_at, null: true

      t.references :user, null: true, foreign_key: true

      t.timestamps
    end
  end
end
