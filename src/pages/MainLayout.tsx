


import HeroComponnet from "../components/HeroComponnet"
import ServicesSection from "../components/ServicesSection"
import Timeline from "../components/Timeline"
import HireMeSection from "../components/HireMeSection"
import PortfolioSection from "../components/PortfolioSection"
import TestimonialsSection from "../components/TestimonialsSection"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
export default function MainLayout() {
  return (
   <>
   <HeroComponnet/>
   <ServicesSection/>
   <Timeline/>
   <HireMeSection/>
   <PortfolioSection/>
   <TestimonialsSection/>
   <ContactMe/>
   <Footer/>
   
</>

  );
}