import { useEffect, useRef } from 'react'
import { BadgeCheck, Wrench, Clock, ThumbsUp, Tag, Headphones } from 'lucide-react'
import './WhyUs.css'

const reasons = [
  { icon: BadgeCheck, text: 'Ekip i Certifikuar',    sub: 'Teknikë me licencë' },
  { icon: Wrench,     text: 'Instalim Profesional',  sub: 'Punë e rregullt' },
  { icon: Clock,      text: 'Mbështetje 24/7',       sub: 'Gjithmonë gati' },
  { icon: ThumbsUp,   text: 'Garanci Produktesh',    sub: '2 vjet garanci' },
  { icon: Tag,        text: 'Çmime Konkurruese',     sub: 'Transparencë totale' },
  { icon: Headphones, text: 'Shërbim Pas Shitjes',   sub: 'Kujdesi për ju' },
]

function useReveal(threshold = 0.1) {
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

function WhyUs() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className="whyus" id="why-us">
      <div className="whyus__container">
        <div className="whyus__left reveal-item" ref={leftRef}>
          <span className="whyus__label">Pse Ne?</span>
          <h2 className="whyus__title">
            Profesionalizëm<br />
            <span>Pa Kompromis</span>
          </h2>
          <p className="whyus__desc">
            Ofrojmë shërbime teknologjike me cilësi të lartë për shtëpi dhe biznese në të gjithë Shqipërinë.
            Çdo projekt trajtohet me kujdesin maksimal.
          </p>
          <div className="whyus__stats">
            <div className="whyus__stat">
              <span className="whyus__stat-num">50+</span>
              <span className="whyus__stat-label">Projekte</span>
            </div>
            <div className="whyus__stat-sep" />
            <div className="whyus__stat">
              <span className="whyus__stat-num">3+</span>
              <span className="whyus__stat-label">Vjet</span>
            </div>
            <div className="whyus__stat-sep" />
            <div className="whyus__stat">
              <span className="whyus__stat-num">100%</span>
              <span className="whyus__stat-label">Kënaqësi</span>
            </div>
          </div>
          <a href="https://wa.me/355676749350" target="_blank" rel="noreferrer" className="whyus__cta">
            Na Kontaktoni
          </a>
        </div>

        <div className="whyus__right reveal-item" ref={rightRef}>
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className="whyus__badge" style={{ '--delay': `${i * 0.08}s` }}>
                <div className="whyus__badge-icon">
                  <Icon size={18} />
                </div>
                <div className="whyus__badge-text">
                  <strong>{r.text}</strong>
                  <span>{r.sub}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
