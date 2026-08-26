import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Phone, Play } from 'lucide-react'
import './Hero.css'

const slides = [
  {
    category: 'CCTV Systems',
    headline: 'Shiko\nÇdo Gjë.',
    sub: 'Kamera 4K me AI Detection — Mbroj shtëpinë dhe biznesin tënd 24/7.',
    accent: '#2f80ed',
    tag: '📹 Smart Surveillance',
  },
  {
    category: 'Smart Home',
    headline: 'Kontrollo\nBotën Tënde.',
    sub: 'Automatizim i plotë — Drita, siguria, klima, gjithçka nga një prekje.',
    accent: '#13b8a6',
    tag: '🏠 Smart Living',
  },
  {
    category: 'Audio Systems',
    headline: 'Ndjeni\nÇdo Tingull.',
    sub: 'Sisteme audio profesionale për shtëpi, hotele dhe ambiente komerciale.',
    accent: '#7c5ce6',
    tag: '🔊 Premium Audio',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const go = () => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length)
        setAnimating(false)
      }, 600)
    }
    timerRef.current = setInterval(go, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect()
      if (!rect) return
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const slide = slides[current]

  const go = (i) => {
    if (i === current) return
    setAnimating(true)
    setTimeout(() => { setCurrent(i); setAnimating(false) }, 600)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length)
        setAnimating(false)
      }, 600)
    }, 5000)
  }

  const glowX = mousePos.x * 100
  const glowY = mousePos.y * 100

  return (
    <section className="hero" ref={heroRef} id="hero">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div
          className="hero__glow"
          style={{
            background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, ${slide.accent}18 0%, transparent 65%)`,
            transition: 'background 0.3s ease',
          }}
        />
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="hero__particle"
              style={{
                left: `${(i * 17 + 5) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${6 + (i % 4)}s`,
              }}
            />
          ))}
        </div>
        {/* Scanline overlay */}
        <div className="hero__scanline" />
      </div>

      {/* Slide category tag */}
      <div className={`hero__tag-wrap ${animating ? 'hero__tag-wrap--out' : 'hero__tag-wrap--in'}`}>
        <span className="hero__tag" style={{ borderColor: `${slide.accent}50`, color: slide.accent }}>
          {slide.tag}
        </span>
      </div>

      {/* Main content */}
      <div className={`hero__content ${animating ? 'hero__content--out' : 'hero__content--in'}`}>
        <h1 className="hero__title">
          {slide.headline.split('\n').map((line, i) => (
            <span key={i} className={i === 1 ? 'hero__title--accent' : ''} style={i === 1 ? { color: slide.accent } : {}}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero__desc">{slide.sub}</p>

        <div className="hero__actions">
          <Link to="/sherbimet" className="hero__btn hero__btn--primary" style={{ background: slide.accent, color: '#07111f' }}>
            Shiko Shërbime
          </Link>
          <a href="tel:+355676749350" className="hero__btn hero__btn--secondary">
            <Phone size={16} />
            +355 67 674 9350
          </a>
        </div>
      </div>

      {/* Slide metrics strip — Dahua-inspired */}
      <div className={`hero__metrics ${animating ? 'hero__metrics--out' : 'hero__metrics--in'}`}>
        <div className="hero__metric">
          <span className="hero__metric-num" style={{ color: slide.accent }}>50+</span>
          <span className="hero__metric-label">Projekte</span>
        </div>
        <div className="hero__metric-sep" />
        <div className="hero__metric">
          <span className="hero__metric-num" style={{ color: slide.accent }}>3+</span>
          <span className="hero__metric-label">Vjet</span>
        </div>
        <div className="hero__metric-sep" />
        <div className="hero__metric">
          <span className="hero__metric-num" style={{ color: slide.accent }}>24/7</span>
          <span className="hero__metric-label">Support</span>
        </div>
        <div className="hero__metric-sep" />
        <div className="hero__metric">
          <span className="hero__metric-num" style={{ color: slide.accent }}>100%</span>
          <span className="hero__metric-label">Garanci</span>
        </div>
      </div>

      {/* Slide nav dots */}
      <div className="hero__dots">
        {slides.map((s, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            style={i === current ? { background: slide.accent } : {}}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter — Dahua style */}
      <div className="hero__counter">
        <span style={{ color: slide.accent }}>{String(current + 1).padStart(2, '0')}</span>
        <span className="hero__counter-sep" />
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll cue */}
      <a href="#why-us" className="hero__scroll" aria-label="Shko te përmbajtja">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
