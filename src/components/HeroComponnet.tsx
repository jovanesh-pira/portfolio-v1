

import HeaderComponent from "../components/HeaderComponent"
import Container from "./Container";
import { FaQuoteLeft } from "react-icons/fa6";
import HeroCtaPill from "./HeroCtaPill"

function HeroComponnet() {
  return (
     <div className=" ">
     <HeaderComponent />
      <Container className="h-screen  flex-col flex items-center justify-end ">
        <div className="relative inline-block">
 
  <div className="rounded-full border border-border bg-background px-4 py-1 text-sm font-medium text-foreground mb-10">
   <span className="text-xl"> Hello!</span>
  </div>
</div>
        <h1 className="text-7xl font-semibold   text-center">Hi, I’m <span className="text-primary">Piramun</span> <br /> Frontend Developer</h1>
        <div className="relative  mt-25">
            <div className="w-200 h-100 bg-primary rounded-tl-full rounded-tr-full"></div>
            <img src="/HeroImage.png" alt="" className="absolute bottom-0 w-150 left-[50%] -translate-x-[50%]"/>
            {/* actions btns */}
    <HeroCtaPill></HeroCtaPill>
      </div>
      <div className="absolute flex flex-col left-[10%] top-[50%] text-muted-text">
        <FaQuoteLeft className="text-3xl"/>
        <p className="w-80 text-xl mt-4">I focus on clean UI, accessibility, and performance—turning designs into production-ready apps</p></div> 
        <div className="absolute flex flex-col right-[10%] top-[55%] text-muted-text">
            <p className="w-80 text-xl mt-4">React + TypeScript + Tailwind — building clean UI and fast experiences.</p>
        </div>
     
      </Container>
     
    </div>
  );
}

export default HeroComponnet
