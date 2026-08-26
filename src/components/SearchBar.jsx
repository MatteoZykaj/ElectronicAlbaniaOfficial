import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import './SearchBar.css'

const items = [
  { label: 'CCTV Systems',      to: '/sherbimet' },
  { label: 'Smart Home',        to: '/sherbimet' },
  { label: 'IT Support',        to: '/sherbimet' },
  { label: 'Audio Systems',     to: '/sherbimet' },
  { label: 'Paketa 4 Kamera',   to: '/sherbimet' },
  { label: 'Paketa 8 Kamera',   to: '/sherbimet' },
  { label: 'Paketa 16 Kamera',  to: '/sherbimet' },
  { label: 'Paketa 32 Kamera',  to: '/sherbimet' },
  { label: 'Kamera Indoor',     to: '/produktet' },
  { label: 'Kamera Outdoor',    to: '/produktet' },
  { label: 'Smart Lock',        to: '/produktet' },
  { label: 'Router WiFi 6',     to: '/produktet' },
  { label: 'Produktet',         to: '/produktet' },
  { label: 'Galeria',           to: '/galeri'    },
  { label: 'Projektet',         to: '/galeri'    },
  { label: 'Kontakt',           to: '/kontakt'   },
  { label: 'WhatsApp',          href: 'https://wa.me/355676749350' },
]

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filtered = query.length > 1
    ? items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
    : []

  const handleSelect = (item) => {
    onClose()
    if (item.href) {
      window.open(item.href, '_blank')
    } else {
      navigate(item.to)
    }
  }

  return (
    <div className="searchbar__overlay" onClick={onClose}>
      <div className="searchbar__box" onClick={e => e.stopPropagation()}>
        <div className="searchbar__input-row">
          <Search size={20} className="searchbar__icon" />
          <input
            autoFocus
            type="text"
            placeholder="Kërko shërbim, produkt..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="searchbar__input"
          />
          <button onClick={onClose} className="searchbar__close">
            <X size={20} />
          </button>
        </div>
        {filtered.length > 0 && (
          <ul className="searchbar__results">
            {filtered.map((r, i) => (
              <li key={i}>
                <button onClick={() => handleSelect(r)}>
                  <Search size={14} />
                  {r.label}
                </button>
              </li>
            ))}
          </ul>
        )}
        {query.length > 1 && filtered.length === 0 && (
          <p className="searchbar__empty">Nuk u gjet asnjë rezultat për "{query}"</p>
        )}
      </div>
    </div>
  )
}
