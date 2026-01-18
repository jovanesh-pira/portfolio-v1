import Container from "./Container";

type TimelineItem = {
  year?: string;
  title: string;
  subtitle: string;
  side?: "left" | "right";
};

const items: TimelineItem[] = [
  {
    year: "2024",
    title: "UI/UX Foundations",
    subtitle: "Design principles, layout, spacing, typography, and clean UI patterns.",
    side: "left",
  },
  {
    year: "2025",
    title: "Frontend Implementation (React)",
    subtitle: "Turning UI designs into responsive interfaces with React + Tailwind CSS.",
    side: "right",
  },
  {
    year: "2026",
    title: "Portfolio & Client-Ready Delivery",
    subtitle: "Landing pages and UI sections with attention to performance and details.",
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
    <div className={`px-8   `}>
      <p className="text-2xl">{title}</p>
      <p>{year}</p>
      <p>{subtitle}</p>
    </div>
  )
}


function Timeline() {
    return(<Container className="py-40">
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




