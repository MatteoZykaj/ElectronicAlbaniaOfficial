import './PageHero.css'

export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg">
        <div className="page-hero__grid" />
        <div className="page-hero__glow" />
      </div>
      <div className="page-hero__content">
        <span className="page-hero__label">{label}</span>
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
