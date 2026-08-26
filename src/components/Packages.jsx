import { Star } from 'lucide-react'
import './Packages.css'

const packages = [
  {
    cameras: 4,
    title: '4 Camera System',
    desc: 'Ideal per shtëpi dhe biznese te vogla. Mbulim i plote 24/7 me kamera 2MP.',
    badge: null,
  },
  {
    cameras: 8,
    title: '8 Camera System',
    desc: 'Zgjidhja perfekte per biznese dhe ambiente komerciale me kamera 4MP.',
    badge: 'Me Popullorit',
  },
  {
    cameras: 16,
    title: '16 Camera System',
    desc: 'Mbulim profesional per komplekse dhe ndertesa te medha me kamera 4MP.',
    badge: null,
  },
  {
    cameras: 32,
    title: '32 Camera System',
    desc: 'Sistem enterprise per objekte industriale dhe institucione te medha.',
    badge: 'Enterprise',
  },
]

function Packages() {
  return (
    <section className="packages" id="projects">
      <div className="packages__container">
        <div className="packages__header">
          <span className="packages__label">Paketa Sigurie</span>
          <h2 className="packages__title">Sisteme <span>Kamerash</span></h2>
          <p className="packages__desc">
            Zgjidhni paketen qe i pershtatet nevojave tuaja - instalim profesional i perfshire.
          </p>
        </div>
        <div className="packages__grid">
          {packages.map(function(p, i) {
            return (
              <div key={i} className={p.badge === 'Me Popullorit' ? 'pkg-card pkg-card--featured' : 'pkg-card'}>
                {p.badge && (
                  <div className="pkg-card__badge">
                    <Star size={12} />
                    {p.badge}
                  </div>
                )}
                <div className="pkg-card__number">{p.cameras}</div>
                <div className="pkg-card__cam-label">Kamera</div>
                <h3 className="pkg-card__title">{p.title}</h3>
                <p className="pkg-card__desc">{p.desc}</p>
                <a
                  href="https://wa.me/355676749350"
                  target="_blank"
                  rel="noreferrer"
                  className="pkg-card__cta"
                >
                  Kerko Oferte
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Packages
