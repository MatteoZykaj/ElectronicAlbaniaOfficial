import { Link } from 'react-router-dom'
import './HomeCTA.css'

export default function HomeCTA() {
  return (
    <section className="home-cta">
      <div className="home-cta__container">
        <div className="home-cta__glow" />
        <span className="home-cta__label">Gati të filloni?</span>
        <h2 className="home-cta__title">
          Çdo Hapësirë<br />
          <span>E Mbrojtur</span>
        </h2>
        <p className="home-cta__desc">
          Nga shtëpitë private tek ndërtesat e mëdha — ofrojmë zgjidhje për çdo nevojë dhe buxhet.
        </p>
        <div className="home-cta__actions">
          <Link to="/sherbimet" className="home-cta__btn home-cta__btn--primary">
            Shiko Shërbimet
          </Link>
          <Link to="/produktet" className="home-cta__btn home-cta__btn--secondary">
            Katalogu i Produkteve
          </Link>
          <a
            href="https://wa.me/355676749350"
            target="_blank"
            rel="noreferrer"
            className="home-cta__btn home-cta__btn--wa"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
