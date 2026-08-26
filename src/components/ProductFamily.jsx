import { Link } from 'react-router-dom'
import './ProductFamily.css'

const categories = [
  { emoji: '📹', title: 'Kamera Indoor', desc: 'Per ambiente te brendshme', tag: 'Indoor' },
  { emoji: '🌧️', title: 'Kamera Outdoor', desc: 'Rezistente ndaj motit IP67', tag: 'Outdoor' },
  { emoji: '🔋', title: 'Kamera Baterie', desc: 'Pa kabo, instalim kudo', tag: 'Wireless' },
  { emoji: '🚪', title: 'Smart Entry', desc: 'Dyer dhe brava inteligjente', tag: 'Smart' },
  { emoji: '🏠', title: 'Smart Control', desc: 'Sensorë dhe automatizim', tag: 'Control' },
  { emoji: '🧹', title: 'Smart Home Kit', desc: 'Paketa te plota smart home', tag: 'Kit' },
]

export default function ProductFamily() {
  return (
    <section className="family" id="categories">
      <div className="family__container">

        <div className="family__header">
          <span className="family__label">Kategoria e Produkteve</span>
          <h2 className="family__title">Gjej <span>Produktin</span> Tend</h2>
          <p className="family__desc">Zgjidhje per cdo nevoje — nga kamera te thjeshta deri tek sisteme te plota smart home.</p>
        </div>

        <div className="family__grid">
          {categories.map((c, i) => (
            <Link key={i} to="/kontakt" className="family__card">
              <div className="family__card-emoji">{c.emoji}</div>
              <span className="family__card-tag">{c.tag}</span>
              <h3 className="family__card-title">{c.title}</h3>
              <p className="family__card-desc">{c.desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
