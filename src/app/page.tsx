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
      <Testimonials/>
    </div>
  )
}