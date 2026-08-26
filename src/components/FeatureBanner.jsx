import { useEffect, useRef } from 'react'
import './FeatureBanner.css'

const features = [
  { icon: '🛡️', title: 'Garanci 2 Vjet',     desc: 'Te gjitha produktet me garanci te plote' },
  { icon: '⚡', title: 'Instalim i Shpejte', desc: 'Brenda 24-48 oreve ne Durres' },
  { icon: '📱', title: 'Remote Access',       desc: 'Kontrollo nga telefoni kudo ne bote' },
  { icon: '🔧', title: 'Support 24/7',        desc: 'Ekipi yne gjithmone ne sherbimin tuaj' },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function FeatureBanner() {
  const ref = useReveal()
  return (
    <section className="fbanner reveal-item" ref={ref}>
      <div className="fbanner__container">
        {features.map((f, i) => (
          <div key={i} className="fbanner__item" style={{ '--delay': `${i * 0.1}s` }}>
            <span className="fbanner__icon">{f.icon}</span>
            <div className="fbanner__body">
              <strong className="fbanner__title">{f.title}</strong>
              <p className="fbanner__desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
