import PageHero from '../components/PageHero'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import HowItWorks from '../components/HowItWorks'
import Packages from '../components/Packages'
import ProductFamily from '../components/ProductFamily'

export default function SherbimetPage() {
  return (
    <>
      <PageHero
        label="Çfarë ofrojmë"
        title="Shërbime Profesionale"
        subtitle="Nga CCTV te Smart Home — zgjidhim çdo nevojë teknologjike me ekspertizë dhe shpejtësi."
      />
      <Services />
      <Solutions />
      <HowItWorks />
      <Packages />
      <ProductFamily />
    </>
  )
}
