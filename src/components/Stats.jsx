import './Stats.css'

const stats = [
  { number: '50+', label: 'Projekte të Kryera' },
  { number: '3+', label: 'Vjet Eksperiencë' },
  { number: '100%', label: 'Klientë të Kënaqur' },
  { number: '24/7', label: 'Mbështetje Teknike' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <span className="stat__number">{s.number}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
