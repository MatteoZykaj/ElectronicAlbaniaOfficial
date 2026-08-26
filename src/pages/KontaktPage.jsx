import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Na kontaktoni"
        title="Gati të Ndihmojmë"
        subtitle="Keni nevojë për instalim CCTV, Smart Home apo ndonjë shërbim tjetër? Ju përgjigjemi sa më shpejt!"
      />
      <Contact />
    </>
  )
}
