
import AboutAgency from '../../Components/AboutAgency/AboutAgency'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import CommentsClient from '../../Components/CommentsClient/CommentsClient'
import ContactSec from '../../Components/Contact/Contact'
import MainSection from '../../Components/MainSection/MainSection'
import Projects from '../../Components/Projects/Projects'
import Provider from '../../Components/Provider/Provider'

function HomePage() {
  return (
    <div>
      <MainSection/>
      <BrandLogo/>
      <AboutAgency/>
      <Provider/>
      <Projects/>
      <CommentsClient/>
      <ContactSec/>
    </div>
  )
}

export default HomePage
