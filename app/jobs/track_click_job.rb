class TrackClickJob < ApplicationJob
  queue_as :default

  def perform(short_url_id, referrer:, user_agent:, ip_address:, clicked_at:)
    short_url = ShortUrl.find_by(id: short_url_id)
    return unless short_url

    Click.create!(
      short_url: short_url,
      referrer: referrer,
      user_agent: user_agent,
      ip_address: ip_address,
      clicked_at: clicked_at
    )
  end
end
