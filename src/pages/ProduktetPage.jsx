import PageHero from '../components/PageHero'
import Shop from '../components/Shop'

export default function ProduktetPage() {
  return (
    <>
      <PageHero
        label="Katalogu i Produkteve"
        title="Produktet Tona"
        subtitle="Kliko një produkt për detaje të plota — pastaj dërgoje direkt në WhatsApp për ofertë."
      />
      <Shop />
    </>
  )
}
