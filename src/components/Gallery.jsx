import { useEffect, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import './Gallery.css'

// ─── ADD YOUR PHOTOS HERE ───────────────────────────────────────────────────
// Replace the src values with real image URLs or import your images
// e.g. import photo1 from '../assets/photo1.jpg'
// Then use: { src: photo1, ... }
const photos = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    title: 'Instalim CCTV',
    category: 'CCTV',
  },
  {
    src: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    title: 'Smart Home Setup',
    category: 'Smart Home',
  },
  {
    src: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=600&q=80',
    title: 'Sistem Audio',
    category: 'Audio',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    title: 'IT Support',
    category: 'IT',
  },
  {
    src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80',
    title: 'Rrjet & Konfiguracion',
    category: 'IT',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618047-f4e60c4d4e97?w=600&q=80',
    title: 'Kamera Sigurie',
    category: 'CCTV',
  },
]

const categories = ['Të gjitha', 'CCTV', 'Smart Home', 'Audio', 'IT']

export default function Gallery() {
  const [active, setActive] = useState('Të gjitha')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'Të gjitha'
    ? photos
    : photos.filter(p => p.category === active)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <span className="gallery__label">Punët tona</span>
          <h2 className="gallery__title">Galeria e<br /><span>Projekteve</span></h2>
          <p className="gallery__desc">
            Shiko punët reale të kryera nga ekipi ynë — çdo projekt me kujdes dhe profesionalizëm.
          </p>
        </div>

        <div className="gallery__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery__filter ${active === cat ? 'gallery__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((photo, i) => (
            <button
              key={i}
              type="button"
              className="gallery__item"
              onClick={() => setLightbox(photo)}
              aria-label={`Hap foton: ${photo.title}`}
            >
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="gallery__overlay">
                <ZoomIn size={28} />
                <span>{photo.title}</span>
                <span className="gallery__cat-badge">{photo.category}</span>
              </div>
            </button>
          ))}
        </div>

        <p className="gallery__note">Fotot e projekteve reale publikohen me lejen e klientëve tanë.</p>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={lightbox.title}>
          <button type="button" className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Mbyll foton">
            <X size={28} />
          </button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <p>{lightbox.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
