import { useEffect } from 'react'
import { X, MessageCircle, Mail } from 'lucide-react'
import './ProductModal.css'

function ProductModal(props) {
  var p = props.product

  useEffect(function() {
    function closeOnEscape(event) {
      if (event.key === 'Escape') props.onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return function() { window.removeEventListener('keydown', closeOnEscape) }
  }, [props])

  function sendWhatsApp() {
    var msg = 'Pershendetje Electronic Albania!\n\n'
    msg += 'Jam i interesuar per:\n'
    msg += 'Produkti: ' + p.name + '\n'
    msg += 'Brand: ' + p.brand + '\n'
    msg += 'Model: ' + p.model + '\n\n'
    msg += 'Ju lutem me kontaktoni per cmim dhe disponibilitet!'
    window.open('https://wa.me/355676749350?text=' + encodeURIComponent(msg), '_blank')
  }

  function sendEmail() {
    var subject = 'Kerkese per ' + p.name + ' - ' + p.brand + ' ' + p.model
    var body = 'Pershendetje,\n\nJam i interesuar per produktin:\n' + p.name + ' - ' + p.brand + ' ' + p.model + '\n\nJu lutem me kontaktoni per cmim.'
    window.location.href = 'mailto:electronicalbaniaofficial@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
  }

  return (
    <div className="modal" onClick={props.onClose} role="presentation">
      <div className="modal__box" onClick={function(e) { e.stopPropagation() }} role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <button type="button" className="modal__close" onClick={props.onClose} aria-label="Mbyll detajet e produktit">
          <X size={22} />
        </button>

        <div className="modal__layout">

          <div className="modal__img-wrap">
            {p.image ? (
              <img src={p.image} alt={p.name} />
            ) : (
              <div className="modal__placeholder">
                <span>
                  {p.category === 'cctv' && '📹'}
                  {p.category === 'smarthome' && '🏠'}
                  {p.category === 'audio' && '🔊'}
                  {p.category === 'it' && '💻'}
                  {p.category === 'access' && '🔐'}
                  {p.category === 'alarm' && '🚨'}
                  {p.category === 'cables' && '🔌'}
                </span>
                <p>Foto vjen se shpejti</p>
              </div>
            )}
            {p.badge && (
              <div className="modal__badge" style={{ background: p.badgeColor || '#2f80ed' }}>
                {p.badge}
              </div>
            )}
          </div>

          <div className="modal__info">
            <div className="modal__brand">{p.brand}</div>
            <h2 className="modal__name" id="product-modal-title">{p.name}</h2>
            <div className="modal__model">Model: <strong>{p.model}</strong></div>

            <p className="modal__desc">{p.desc}</p>

            <div className="modal__specs">
              <div className="modal__specs-title">Specifikimet</div>
              <ul>
                {p.specs.map(function(s) {
                  return (
                    <li key={s}>
                      <span className="modal__check">✓</span>
                      {s}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="modal__stock">
              <span className={'modal__stock-dot' + (p.inStock ? ' in' : ' out')} />
              {p.inStock ? 'Ne stok' : 'Pa stok'}
            </div>

            <div className="modal__actions">
              <button type="button" className="modal__wa" onClick={sendWhatsApp}>
                <MessageCircle size={18} />
                Kerko Cmimin ne WhatsApp
              </button>
              <button type="button" className="modal__email" onClick={sendEmail}>
                <Mail size={18} />
                Dergo Email
              </button>
            </div>

            <p className="modal__note">
              Pergjigja brenda 1-2 oreve gjate orarit te punes.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductModal
