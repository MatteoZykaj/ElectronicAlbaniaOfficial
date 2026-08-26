import './ProductCard.css'

function ProductCard(props) {
  var p = props.product

  function openWhatsApp(e) {
    e.stopPropagation()
    var msg = 'Pershendetje! Jam i interesuar per produktin:\n\n'
    msg += p.name + ' - ' + p.brand + ' ' + p.model + '\n\n'
    msg += 'Ju lutem me jepni nje oferte!'
    window.open('https://wa.me/355676749350?text=' + encodeURIComponent(msg), '_blank')
  }

  return (
    <div
      className="pcard"
      onClick={props.onClick}
      onKeyDown={function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.onClick() } }}
      role="button"
      tabIndex="0"
      aria-label={`Shiko detajet për ${p.name}`}
    >
      {p.badge && (
        <div className="pcard__badge" style={{ background: p.badgeColor || '#2f80ed', color: '#000' }}>
          {p.badge}
        </div>
      )}

      <div className="pcard__img">
        {p.image ? (
          <img src={p.image} alt={p.name} loading="lazy" />
        ) : (
          <div className="pcard__placeholder">
            <span className="pcard__placeholder-icon">
              {p.category === 'cctv' && '📹'}
              {p.category === 'smarthome' && '🏠'}
              {p.category === 'audio' && '🔊'}
              {p.category === 'it' && '💻'}
              {p.category === 'access' && '🔐'}
              {p.category === 'alarm' && '🚨'}
              {p.category === 'cables' && '🔌'}
            </span>
            <span className="pcard__placeholder-text">Foto se shpejti</span>
          </div>
        )}
      </div>

      <div className="pcard__body">
        <div className="pcard__brand">{p.brand}</div>
        <h3 className="pcard__name">{p.name}</h3>
        <div className="pcard__model">Model: {p.model}</div>

        <ul className="pcard__specs">
          {p.specs.slice(0, 2).map(function(s) {
            return <li key={s}>{s}</li>
          })}
        </ul>

        <div className="pcard__footer">
          <span className="pcard__price">{p.priceLabel}</span>
          <button type="button" className="pcard__btn" onClick={openWhatsApp} aria-label={`Kërko çmim në WhatsApp për ${p.name}`}>
            WhatsApp 💬
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
