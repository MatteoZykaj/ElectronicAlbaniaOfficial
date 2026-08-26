import './ProductShowcase.css'

const products = [
  {
    emoji: '📹',
    tag: 'Bestseller',
    name: 'CCTV Pro 4K',
    desc: 'Kamera e jashtme me rezolucion 4K, night vision 30m dhe weather-proof IP67.',
    specs: ['4K Ultra HD', 'Night Vision 30m', 'IP67 Waterproof', 'Motion Alert'],
    color: '#2f80ed',
  },
  {
    emoji: '🏠',
    tag: 'Smart Home',
    name: 'Home Hub Kit',
    desc: 'Kontrollo te gjitha pajisjet e shtepise nga nje app. Kompatibel me Alexa & Google.',
    specs: ['App Control', 'Voice Control', 'Auto Scenes', 'Energy Monitor'],
    color: '#13b8a6',
  },
  {
    emoji: '🔊',
    tag: 'Audio',
    name: 'Sound System Pro',
    desc: 'Sistem audio surround per shtepi dhe biznese. Instalim i perfshire.',
    specs: ['Surround Sound', 'Multi-room', 'Bluetooth 5.0', 'Pro Install'],
    color: '#7c5ce6',
  },
  {
    emoji: '💻',
    tag: 'IT Support',
    name: 'Network Setup',
    desc: 'Konfigurim i plote i rrjetit, router, switch dhe Wi-Fi per zyra dhe biznese.',
    specs: ['Wi-Fi 6', 'VPN Setup', 'Remote Support', '24/7 Monitor'],
    color: '#a855f7',
  },
]

function ProductShowcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="showcase__container">
        <div className="showcase__header">
          <span className="showcase__label">Produktet tona</span>
          <h2 className="showcase__title">Zgjidh <span>Produktin</span> e Duhur</h2>
          <p className="showcase__desc">
            Teknologji e larte, instalim profesional, garanci e plote.
          </p>
        </div>
        <div className="showcase__grid">
          {products.map(function(p, i) {
            return (
              <div key={i} className="showcase__card" style={{ '--card-accent': p.color }}>
                <div className="showcase__card-top">
                  <span className="showcase__tag">{p.tag}</span>
                  <div className="showcase__emoji">{p.emoji}</div>
                </div>
                <h3 className="showcase__name">{p.name}</h3>
                <p className="showcase__card-desc">{p.desc}</p>
                <ul className="showcase__specs">
                  {p.specs.map(function(s) {
                    return <li key={s}>✓ {s}</li>
                  })}
                </ul>
                <a
                  href="https://wa.me/355676749350"
                  target="_blank"
                  rel="noreferrer"
                  className="showcase__btn"
                >
                  Kerko Cmim
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
