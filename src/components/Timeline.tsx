import Container from "./Container";

type TimelineItem = {
  year?: string;
  title: string;
  subtitle: string;
  side?: "left" | "right";
};

const items: TimelineItem[] = [
  {
    year: "01",
    title: "UI & Requirements Alignment",
    subtitle:
      "Reviewing designs, defining scope, and clarifying requirements before writing any code.",
    side: "left",
  },
  {
    year: "02",
    title: "Frontend Implementation (React)",
    subtitle:
      "Building responsive, scalable, and maintainable UI using React, TypeScript, and Tailwind CSS.",
    side: "right",
  },
  {
    year: "03",
    title: "Polish, Testing & Delivery",
    subtitle:
      "Final checks, responsiveness, clean code, and production-ready delivery.",
    side: "left",
  },
];



  function createDot(){
   return (
   <>
     <div className="absolute lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
        </div>
      </div>
   </>
   );
}
function CartTimeLine({title,year,subtitle}:TimelineItem){
 
 
  return (
    <div className={`px-8 relative  py-10 rounded-2xl`}>
      <p className="text-3xl text-primary-50 mb-4 font-bold">{year}</p>
      <p className="text-2xl">{title}</p>
      
      <p>{subtitle}</p>
    </div>
  )
}


function Timeline() {
    return(<Container className="py-40">
      <div className="w-full mt-5 mb-20 text-center space-y-5"><h2 className="text-3xl font-semibold ">How I  
 <span className="text-primary-50 inline-block pl-2">Work</span></h2>
      <p className="text-xl text-gray-400 mb-20">A clear, simple process from idea to production-ready frontend.
</p></div>
      <div className="relative ">
        {/* A line in the Middle */}
         <div className="
      absolute
      left-5 lg:left-1/2 lg:-translate-x-1/2
      top-[12%] bottom-[12%]
      border border-dashed border-primary  
    " />
         <div className=" space-y-10 ">
          {items.map((item,index)=>{
      let isLeft=(index%2)===0
     
      return(
        
        <div className="relative z-30 " >
         
       {createDot()}
        <div className="grid gap-3 lg:grid-cols-2 ">
          
          {/* left place if we have true */}
          <div className="px-5">
           {isLeft&&
           <CartTimeLine  {...item} />
           
           }
         
          </div>
        <div className="px-5">
          {!isLeft&& <CartTimeLine {...item} />}
      
          </div>
        </div>
        
        </div>
      )
    })}
         </div>
    </div>
    </Container>)
 
 
}

export default Timeline




