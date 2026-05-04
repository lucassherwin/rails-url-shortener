class Click < ApplicationRecord
  belongs_to :short_url, counter_cache: true

  validates :clicked_at, presence: true
end
