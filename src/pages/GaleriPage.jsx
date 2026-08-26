import PageHero from '../components/PageHero'
import ProductShowcase from '../components/ProductShowcase'
import Gallery from '../components/Gallery'

export default function GaleriPage() {
  return (
    <>
      <PageHero
        label="Punët tona"
        title="Galeria e Projekteve"
        subtitle="Shiko punët reale të kryera nga ekipi ynë — çdo projekt me kujdes dhe profesionalizëm."
      />
      <ProductShowcase />
      <Gallery />
    </>
  )
}
