import './TechTicker.css'

const brands = [
  '📡 Hikvision', '📷 Dahua', '🔐 Bosch', '📱 Tuya Smart',
  '🔊 Sonos', '🌐 Ubiquiti', '🏠 Philips Hue', '🛡️ Ajax Systems',
  '📹 Axis', '⚡ Schneider', '🔒 Yale', '📶 TP-Link',
]

export default function TechTicker() {
  return (
    <section className="ticker">
      <div className="ticker__inner">
        <div className="ticker__label">
          <span>Partner Brands</span>
        </div>
        <div className="ticker__track">
          <div className="ticker__list">
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="ticker__item">
                <span className="ticker__item-text">{b}</span>
                <span className="ticker__item-dot" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
