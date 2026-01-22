import Container from "./Container"
import { FaCheckDouble } from "react-icons/fa6";
function HireMeSection() {
  return (
    <div className=" bg-muted-text/10">
     <Container className="py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
            {/* LeftSide Content */}
            
                <div className="hidden lg:block relative w-90 mx-auto lg:mx-0 order-2 lg:order-1">
                    <img src="/HireMeImage.png" className="relative z-10" />
                 </div>

                
           
            {/* Right Side Content */}
         <div className="order-1 lg:order-2 text-center lg:text-left "> 
                {/* Titke Secction  */}
         <h2 className=" text-3xl md:text-4xl font-semibold">From UI to Production-ready <span className="text-primary">Frontend</span></h2>
         <div className="relative w-90 h-100 rounded-b-2xl overflow-hidden mx-auto lg:mx-0 my-10 lg:hidden">
                    <img src="/HireMeImage.png" className="relative z-10" />
                 </div>
         <p className="mt-10 text-xl text-muted-text w-100 md:w-120  mx-auto lg:w-fit lg:mx-0 ">I focus on building clean, responsive interfaces with React and Tailwind.
Design-first mindset, detail-oriented execution.</p>
<ul className="space-y-4 mt-10 text-xl  w-fit mx-auto lg:mx-0">
 <li className="flex flex-row items-center lg:justify-start justify-center"><FaCheckDouble className="mr-4 text-primary/50 hidden lg:block"/> UI-first mindset</li>
 <li className="flex flex-row items-center lg:justify-start justify-center"><FaCheckDouble className="mr-4 text-primary/50 hidden lg:block"/> React + Tailwind experience</li>
 <li className="flex flex-row items-center lg:justify-start justify-center"><FaCheckDouble className="mr-4 text-primary/50 hidden lg:block"/> Design → Code workflow</li>
</ul>
<button className="bg-primary px-10 py-4 text-white text-xl font-semibold rounded-md cursor-pointer shadow-lg shadow-primary/70 hover:shadow-xl hover:shadow-primary/50 border-primary/10 border-2 hover:bg-primary-50 mt-10">Let’s build something</button>
         </div>
        </div>
     </Container>
    </div>
  )
}

export default HireMeSection
