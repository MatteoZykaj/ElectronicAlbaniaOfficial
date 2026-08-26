import { useEffect, useRef } from 'react'
import { Camera, Home, Monitor, Music, ChevronRight, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Camera,
    title: 'CCTV Systems',
    emoji: '📹',
    accent: '#2f80ed',
    desc: 'Instalim dhe konfigurim i sistemeve të kamerave të sigurisë për shtëpi dhe biznese. Monitorim 24/7, remote access dhe cilësi të lartë video.',
    features: ['HD & 4K Cameras', 'Remote Viewing', 'Night Vision', 'Motion Detection'],
  },
  {
    icon: Home,
    title: 'Smart Home',
    emoji: '🏠',
    accent: '#13b8a6',
    desc: 'Automatizim i plotë i shtëpisë suaj. Kontrollo ndriçimin, sigurinë dhe klimën nga telefoni juaj kudo të jeni.',
    features: ['Voice Control', 'App Control', 'Energy Saving', 'Auto Scenes'],
  },
  {
    icon: Monitor,
    title: 'IT Support',
    emoji: '💻',
    accent: '#a855f7',
    desc: 'Mbështetje teknike profesionale për kompjuterë, rrjete dhe softuer. Zgjidhje të shpejta dhe efikase për problemet tuaja.',
    features: ['PC Repair', 'Network Setup', 'Software Install', 'Remote Support'],
  },
  {
    icon: Music,
    title: 'Audio Systems',
    emoji: '🔊',
    accent: '#7c5ce6',
    desc: 'Instalim i sistemeve audio profesionale për shtëpi, biznese dhe evente. Cilësi zanore e lartë me teknologjinë më moderne.',
    features: ['Home Theater', 'Multi-room Audio', 'PA Systems', 'Acoustic Design'],
  },
]

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

function ServiceCard({ s, i }) {
  const ref = useReveal(0.1)
  const Icon = s.icon
  return (
    <div
      ref={ref}
      className="service-card reveal-item"
      style={{ '--card-accent': s.accent, '--delay': `${i * 0.12}s` }}
    >
      <div className="service-card__accent-line" />
      <div className="service-card__top">
        <div className="service-card__icon-wrap">
          <div className="service-card__icon">
            <Icon size={22} />
          </div>
          <div className="service-card__glow" />
        </div>
        <span className="service-card__num">0{i + 1}</span>
      </div>
      <h3 className="service-card__title">{s.title}</h3>
      <p className="service-card__desc">{s.desc}</p>
      <ul className="service-card__features">
        {s.features.map(f => (
          <li key={f}>
            <ChevronRight size={13} />
            {f}
          </li>
        ))}
      </ul>
      <a href="https://wa.me/355676749350" target="_blank" rel="noreferrer" className="service-card__cta">
        Pyet tani <ArrowRight size={15} />
      </a>
    </div>
  )
}

export default function Services() {
  const headerRef = useReveal(0.2)
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header reveal-item" ref={headerRef}>
          <span className="services__label">Çfarë ofrojmë</span>
          <h2 className="services__title">Shërbime<br /><span>Profesionale</span></h2>
          <p className="services__desc">
            Nga CCTV te Smart Home — zgjidhim çdo nevojë teknologjike me ekspertizë dhe shpejtësi.
          </p>
        </div>
        <div className="services__grid">
          {services.map((s, i) => <ServiceCard key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
