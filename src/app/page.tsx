import AboutUs from './components/aboutus'
import DesktopHeader from './components/header/desktop'
import Hero from './components/hero'
import {MenuMobile} from './components/menu-mobile'


export default function Home() {
  return (
    <div className="">
      <Hero />
      <DesktopHeader />
      <MenuMobile/>
      <AboutUs />
    </div>
  )
}