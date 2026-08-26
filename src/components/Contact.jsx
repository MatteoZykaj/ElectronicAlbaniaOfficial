import { Phone, Mail, MessageCircle, Instagram, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import './Contact.css'

const FORMSPREE_URL = 'https://formspree.io/f/xgawgnbz'

const CRM_URL =
    'https://script.google.com/macros/s/AKfycbwQwyHCB-k-i9UG9NjXcO3jjJDdtY0accoebnUMoMkQZaCi5p8Sqh9N4-qM3VJ0ENnN/exec'

const WHATSAPP_NUMBER = '355676749350'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (sending) return

    setSending(true)

    try {
      // =====================================================
      // 1. SEND LEAD TO FORMSPREE
      // =====================================================

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          source: 'Website'
        })
      })

      if (!response.ok) {
        throw new Error('Formspree submission failed')
      }

      // =====================================================
      // 2. SEND LEAD TO GOOGLE SHEETS CRM
      // =====================================================

      await fetch(CRM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
          source: 'Website'
        })
      })

      // Show an in-page confirmation. Opening a new tab automatically after
      // submitting a form is disruptive and is commonly blocked by browsers.

      setSent(true)

      // Clear form
      setForm({
        name: '',
        phone: '',
        message: ''
      })

      setTimeout(() => {
        setSent(false)
      }, 4000)

    } catch (error) {
      console.error('Contact form error:', error)

      alert(
          'Diçka shkoi gabim. Ju lutem provoni përsëri ose na kontaktoni direkt në WhatsApp.'
      )

    } finally {
      setSending(false)
    }
  }

  return (
      <section className="contact" id="contact">
        <div className="contact__container">

          {/* ================= HEADER ================= */}

          <div className="contact__header">
          <span className="contact__label">
            Na kontaktoni
          </span>

            <h2 className="contact__title">
              Gati të<br />
              <span>Ndihmojmë</span>
            </h2>
          </div>


          {/* ================= MAP ================= */}

          <div className="contact__map">
            <iframe
                title="Electronic Albania Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1!2d19.7907111!3d41.3365346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x622a3ac3ccacfef1%3A0x950e325adb5a038e!2sElectronic%20Albania!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="340"
                style={{
                  border: 0,
                  borderRadius: '16px',
                  display: 'block'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>


          {/* ================= CONTENT ================= */}

          <div className="contact__layout">

            {/* ================= CONTACT INFO ================= */}

            <div className="contact__info">

              <p className="contact__intro">
                Keni nevojë për instalim CCTV, Smart Home apo
                ndonjë shërbim tjetër? Na kontaktoni dhe do
                t'ju përgjigjemi sa më shpejt!
              </p>


              <div className="contact__links">

                {/* PHONE */}

                <a
                    href="tel:+355676749350"
                    className="contact__link"
                >
                  <div className="contact__link-icon">
                    <Phone size={20} />
                  </div>

                  <div>
                  <span className="contact__link-label">
                    Telefon
                  </span>

                    <span className="contact__link-val">
                    +355 67 674 9350
                  </span>
                  </div>
                </a>


                {/* EMAIL */}

                <a
                    href="mailto:electronicalbaniaofficial@gmail.com"
                    className="contact__link"
                >
                  <div className="contact__link-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                  <span className="contact__link-label">
                    Email
                  </span>

                    <span className="contact__link-val">
                    electronicalbaniaofficial@gmail.com
                  </span>
                  </div>
                </a>


                {/* WHATSAPP */}

                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__link contact__link--whatsapp"
                >
                  <div className="contact__link-icon">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                  <span className="contact__link-label">
                    WhatsApp
                  </span>

                    <span className="contact__link-val">
                    Mesazhni tani
                  </span>
                  </div>
                </a>


                {/* INSTAGRAM */}

                <a
                    href="https://instagram.com/electronicalbaniaofficial"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__link"
                >
                  <div className="contact__link-icon">
                    <Instagram size={20} />
                  </div>

                  <div>
                  <span className="contact__link-label">
                    Instagram
                  </span>

                    <span className="contact__link-val">
                    @electronicalbaniaofficial
                  </span>
                  </div>
                </a>


                {/* LOCATION */}

                <a
                    href="https://maps.app.goo.gl/3kTV9TQ9UxF4wD4H6"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__link"
                >
                  <div className="contact__link-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                  <span className="contact__link-label">
                    Vendndodhja
                  </span>

                    <span className="contact__link-val">
                    Shiko në Google Maps 📍
                  </span>
                  </div>
                </a>

              </div>
            </div>


            {/* ================= FORM ================= */}

            <form
                className="contact__form"
                onSubmit={handleSubmit}
            >

              <h3 className="contact__form-title">
                Dërgo Mesazh
              </h3>


              {/* NAME */}

              <div className="contact__field">

                <label htmlFor="name">
                  Emri juaj
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="p.sh. Arben Hoxha"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    minLength={2}
                    required
                />

              </div>


              {/* PHONE */}

              <div className="contact__field">

                <label htmlFor="phone">
                  Numri i telefonit
                </label>

                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+355 6X XXX XXXX"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    minLength={6}
                    required
                />

              </div>


              {/* MESSAGE */}

              <div className="contact__field">

                <label htmlFor="message">
                  Mesazhi
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Përshkruani shërbimin që keni nevojë..."
                    value={form.message}
                    onChange={handleChange}
                    minLength={10}
                    required
                />

              </div>


              {/* SUBMIT */}

              <button
                  type="submit"
                  className="contact__submit"
                  disabled={sending}
              >

                <Send size={16} />

                {sending
                    ? 'Duke dërguar...'
                    : sent
                        ? '✅ U dërgua!'
                        : 'Dërgo Mesazh'
                }

              </button>

              <p className="contact__form-status" aria-live="polite">
                {sent && 'Faleminderit! Mesazhi juaj u dërgua. Do t’ju kontaktojmë së shpejti.'}
              </p>

            </form>

          </div>
        </div>
      </section>
  )
}
