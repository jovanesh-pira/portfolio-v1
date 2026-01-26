

import HeaderComponent from "../components/HeaderComponent"
import Container from "./Container";
import { FaQuoteLeft } from "react-icons/fa6";
import HeroCtaPill from "./HeroCtaPill"

function HeroComponnet() {
  return (
     <div className=" ">
     <HeaderComponent />
      <Container className="min-h-180 md:min-h-200 lg:h-screen  flex-col flex items-center justify-end ">
        <div className="relative inline-block">
 
  <div className="rounded-full border border-border bg-background px-4 py-1 text-sm font-medium text-foreground mb-10">
   <span className="text-xl"> Hello!</span>
  </div>
</div>
{/* maint text or title for the hero section*/}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-center md:mb-5 lg:mb-0">Hi, I’m <span className="text-primary">Piramun</span> <br /> Frontend Developer</h1>
        <div className="relative  mt-25">
            <div className="w-100 md:w-140 lg:w-200 h-60 md:h-70 lg:h-100 bg-primary rounded-tl-full rounded-tr-full"></div>
            <img src="/HeroImage.png" alt="" className="absolute bottom-0 md:w-120 lg:w-150 left-[50%] -translate-x-[50%]"/>
            {/* actions btns */}
          <HeroCtaPill></HeroCtaPill>
      </div>
      <div className="hidden md:flex absolute  flex-col lg:left-[15%] md:left-[8%] md:top-[45%] lg:top-[60%] text-muted-text md:bg-white/20 lg:bg-none rounded-2xl md:backdrop-blur-lg lg:backdrop-blur-none">
        <FaQuoteLeft className="text-3xl"/>
        <p className="lg:w-80 md:w-60 md:text-md lg:text-xl mt-4">I focus on clean UI, accessibility, and performance—turning designs into production-ready apps</p></div> 
        <div className="hidden md:flex absolute  flex-col md:right-[5%] lg:right-[10%] top-[55%] text-muted-text md:bg-white/20 lg:bg-none  md:backdrop-blur-lg lg:backdrop-blur-none md:rounded-2xl md:p-2 ">
            <p className="lg:w-80 md:w-60 md:text-lg lg:text-xl mt-4">React + TypeScript + Tailwind — building clean UI and fast experiences.</p>
        </div>
     
      </Container>
     
    </div>
  );
}

export default HeroComponnet
