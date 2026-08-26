import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Konsultim Falas',
    desc: 'Na kontaktoni dhe ekipi yne vjen te ju. Analizojme nevojat tuaja dhe propozojme zgjidhjen me te mire per hapesiren tuaj.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Instalim Profesional',
    desc: 'Tekniket tane instalojne sistemin brenda 24-48 oreve. Kabllim i rregullt, konfigurim i plote dhe testim final.',
    icon: '🔧',
  },
  {
    number: '03',
    title: 'Monitorim 24/7',
    desc: 'Pas instalimit jeni te mbrojtur. Remote access nga telefoni, alarme ne kohe reale dhe support teknik gjithmone ne dispozicion.',
    icon: '🛡️',
  },
]

export default function HowItWorks() {
  return (
    <section className="hiw">
      <div className="hiw__container">
        <div className="hiw__header">
          <span className="hiw__label">Si funksionon</span>
          <h2 className="hiw__title">3 Hapa drejt <span>Sigurise</span></h2>
          <p className="hiw__desc">
            Nga telefonata e pare deri tek monitorimi i vazhdueshem — ne jemi me ju cdo hap.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map(function(s, i) {
            return (
              <div key={i} className="hiw__step">
                <div className="hiw__step-left">
                  <div className="hiw__step-num">{s.number}</div>
                  {i < steps.length - 1 && <div className="hiw__step-line" />}
                </div>
                <div className="hiw__step-body">
                  <div className="hiw__step-icon">{s.icon}</div>
                  <h3 className="hiw__step-title">{s.title}</h3>
                  <p className="hiw__step-desc">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hiw__cta">
          <a href="https://wa.me/355676749350" target="_blank" rel="noreferrer" className="hiw__btn">
            Fillo Tani — Konsultim Falas
          </a>
        </div>
      </div>
    </section>
  )
}