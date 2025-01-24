import AboutUs from './components/aboutus'
import DesktopHeader from './components/header/desktop'
import Hero from './components/hero'
import {MenuMobile} from './components/menu-mobile'
import Services from './components/services'
import Institutional from './components/Institutional'
import Equipe from './components/Equipe'
import Facetas from './components/facetas'
import Results from './components/results'
import Testimonials from './components/testimonials'
import FAQSection from './components/faq'
import Local from './components/localization'
import Map from './components/map'
import Footer from './components/footer'
import Whatsapp from './components/whatsapp'


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <DesktopHeader />
      <MenuMobile/>
      <AboutUs />
      <Services />
      <Institutional/>
      <Facetas />
      <Equipe />
      <Results />
      <Testimonials />
      <FAQSection />
      <Local />
      <Map />
      <Footer />
      <Whatsapp />
    </div>
  )
}