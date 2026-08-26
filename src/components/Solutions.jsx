import { Link } from 'react-router-dom'
import './Solutions.css'

const solutions = [
  {
    icon: '🏠',
    title: 'Shtepia',
    subtitle: 'Rezidencial',
    desc: 'Mbro familjen dhe prone. CCTV, alarme, kontroll aksesi dhe smart home per shtepine tuaj.',
    points: ['Kamera 4K indoor & outdoor', 'Smart lock & interkom', 'Alarm motion detection', 'App control nga kudo'],
    color: '#2f80ed',
  },
  {
    icon: '🏢',
    title: 'Biznesi',
    subtitle: 'Komercial',
    desc: 'Siguri e plote per dyqane, zyra dhe ambiente komerciale. Monitorim i stafit dhe inventarit.',
    points: ['Sisteme multi-kamera', 'Kontroll aksesi me karte', 'NVR recording 24/7', 'Remote management'],
    color: '#13b8a6',
  },
  {
    icon: '🏨',
    title: 'Hoteli',
    subtitle: 'Hospitality',
    desc: 'Zgjidhje te personalizuara per hotele dhe bujtina. Siguri, komoditet dhe teknologji ne nje sistem.',
    points: ['Kamera per cdo zone', 'Smart entry per dhoma', 'Sistem audio centralizuar', 'Staff monitoring'],
    color: '#7c5ce6',
  },
  {
    icon: '🏗️',
    title: 'Ndertesa',
    subtitle: 'Enterprise',
    desc: 'Sisteme te medha per ndertesa, komplekse banimi dhe objekte industriale me kamera 32+.',
    points: ['32+ kamera sistem', 'Kontroll aksesi multi-zone', 'Integrim me alarme zjarri', 'Menaxhim qendror'],
    color: '#a855f7',
  },
]

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__container">
        <div className="solutions__header">
          <span className="solutions__label">Zgjidhjet tona</span>
          <h2 className="solutions__title">
            Cdo Hapesire <span>E Mbrojtur</span>
          </h2>
          <p className="solutions__desc">
            Nga shtepite private tek ndertesa te medha — ofrojme zgjidhje per cdo nevoje dhe budget.
          </p>
        </div>
        <div className="solutions__grid">
          {solutions.map(function(s, i) {
            return (
              <div key={i} className="sol-card" style={{ '--sol-color': s.color }}>
                <div className="sol-card__top">
                  <span className="sol-card__icon">{s.icon}</span>
                  <span className="sol-card__sub">{s.subtitle}</span>
                </div>
                <h3 className="sol-card__title">{s.title}</h3>
                <p className="sol-card__desc">{s.desc}</p>
                <ul className="sol-card__points">
                  {s.points.map(function(p) {
                    return <li key={p}>✓ {p}</li>
                  })}
                </ul>
                <Link to="/kontakt" className="sol-card__btn">
                  Merr Oferte
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solutions
