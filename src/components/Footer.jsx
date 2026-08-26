import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">

        <div className="footer__col">
          <div className="footer__brand">
            <Zap size={18} />
            <span>Electronic <strong>Albania</strong></span>
          </div>
          <p className="footer__tagline">Teknologji. Projekte. Inovacion.</p>
          <div className="footer__socials">
            <a href="https://instagram.com/electronicalbaniaofficial" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a href="https://wa.me/355676749350" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            <a href="mailto:electronicalbaniaofficial@gmail.com">✉️ Email</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Faqet</h4>
          <ul>
            <li><Link to="/">Kryefaqja</Link></li>
            <li><Link to="/sherbimet">Shërbimet</Link></li>
            <li><Link to="/produktet">Produktet</Link></li>
            <li><Link to="/galeri">Galeri</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Shërbimet</h4>
          <ul>
            <li><Link to="/sherbimet">Kamera CCTV</Link></li>
            <li><Link to="/sherbimet">Smart Home</Link></li>
            <li><Link to="/sherbimet">IT Support</Link></li>
            <li><Link to="/sherbimet">Audio Systems</Link></li>
            <li><Link to="/sherbimet">Access Control</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Paketa Sigurie</h4>
          <ul>
            <li><Link to="/sherbimet">Sistem 4 Kamera</Link></li>
            <li><Link to="/sherbimet">Sistem 8 Kamera</Link></li>
            <li><Link to="/sherbimet">Sistem 16 Kamera</Link></li>
            <li><Link to="/sherbimet">Sistem 32 Kamera</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Kontakt</h4>
          <ul>
            <li><a href="tel:+355676749350">📞 +355 67 674 9350</a></li>
            <li><a href="mailto:electronicalbaniaofficial@gmail.com">✉️ Gmail</a></li>
            <li><a href="https://wa.me/355676749350" target="_blank" rel="noreferrer">💬 WhatsApp</a></li>
            <li><a href="https://maps.app.goo.gl/3kTV9TQ9UxF4wD4H6" target="_blank" rel="noreferrer">📍 Harta</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2026 Electronic Albania. Të gjitha të drejtat e rezervuara.</p>
        <a href="/kontakt" className="footer__contact-link">Kërko ofertë falas</a>
      </div>
    </footer>
  )
}
