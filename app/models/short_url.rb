class ShortUrl < ApplicationRecord
  belongs_to :user, optional: true
  has_many :clicks, dependent: :destroy

  validates :long_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp(%w[http https]), message: "must be a valid URL" }
  validates :alias, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9_-]+\z/, message: "only letters, numbers, hyphens, and underscores allowed" }

  before_validation :generate_alias, on: :create, if: -> { self.alias.blank? }

  scope :for_user, ->(user) { where(user: user) }

  private

  def generate_alias
    loop do
      self.alias = SecureRandom.alphanumeric(7).downcase
      break unless ShortUrl.exists?(alias: self.alias)
    end
  end
end
