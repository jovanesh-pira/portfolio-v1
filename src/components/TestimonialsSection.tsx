
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar,FaRegStar  } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  country?: string;
  rating: number; 
  text: string;
  project: string;
  outcome: string;
  avatarFallback: string; 
};

export const testimonialsSeed: Testimonial[] = [
  {
    id: "t1",
    name: "Aigerim S.",
    role: "Product Manager",
    company: "E-commerce (Kasakhstan)",
    country: "KZ",
    rating: 5,
    text:
      "Mohammad delivered a clean, responsive dashboard with great attention to details. Communication was fast and the UI matched the design closely.",
    project: "Inventory dashboard UI",
    outcome: "Faster product updates + fewer admin errors",
    avatarFallback: "AS",
  },
  {
    id: "t2",
    name: "Daniyar K.",
    role: "Founder",
    company: "Local Retail",
    country: "KZ",
    rating: 2.5,
    text:
      "The React + Tailwind implementation was professional and organized. The codebase is easy to maintain and the layout works perfectly on mobile.",
    project: "Landing + product listing",
    outcome: "Improved mobile conversion and page speed",
    avatarFallback: "DK",
  },
  {
    id: "t3",
    name: "Elena P.",
    role: "UI/UX Designer",
    company: "Agency",
    country: "RU",
    rating: 5,
    text:
      "Great pixel accuracy and spacing. Mohammad handled RTL considerations carefully and kept the UI consistent across components.",
    project: "Component library + RTL support",
    outcome: "Reusable UI blocks for multiple pages",
    avatarFallback: "EP",
  },
  {
    id: "t4",
    name: "Michael T.",
    role: "Operations Lead",
    company: "Small Business",
    country: "EU",
    rating: 5,
    text:
      "He fixed bugs quickly and tested properly. What I liked most: clear updates and a practical approach to solving issues.",
    project: "Menu + responsive issues fix",
    outcome: "Stable navigation on desktop & mobile",
    avatarFallback: "MT",
  },
  {
    id: "t5",
    name: "Zarina N.",
    role: "Store Manager",
    company: "Shop Admin Team",
    country: "KZ",
    rating: 4.5,
    text:
      "Simple, modern UI and very smooth experience. Filters and search feel instant and the admin flow is much easier now.",
    project: "Product CRUD + search/filter UI",
    outcome: "Less time to manage catalog daily",
    avatarFallback: "ZN",
  },
];

function TestimonialsSection() {
  return (
    <div className='bg-[url("/Services_bg.png")] min-h-10 w-full bg-cover bg-center '>
      <Container className='py-20 text-center '>
               <div className='text-white'>
                <h2 className='text-4xl text-white font-semibold text-center'>Testimonials That <br /> Speak to <span className='text-primary'>My Results</span></h2>
               <p className='text-lg mt-10 text-gray-300'>A few words from people I’ve worked with—focused on reliability, clean UI, and production-ready React delivery.</p>
               </div>
                </Container>
               {/* Swiper Slider for Card */}
               <div className="mx-auto max-w-500 px-4 mt-20 pb-20">
                <Swiper
             spaceBetween={18}
             slidesPerView={1.6}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
     
            effect="coverflow"
            centeredSlides
            grabCursor
            loop
           
           
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 1.2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              0: { slidesPerView: 1.12, spaceBetween: 12 },   
          640: { slidesPerView: 1.35, spaceBetween: 14 },
          1024: { slidesPerView: 1.6, spaceBetween: 16 },
            }}
      className='flex flex-row items-center justify-between gap-10'
    >
     {testimonialsSeed.map(item=>{
      return (
        <SwiperSlide> <div className='backdrop-blur-sm  min-h-10 bg-white/5 rounded-xl border border-white/20 py-15 px-12 relative'>
          <FaQuoteRight className='absolute top-10 right-20 text-7xl text-gray-200/5' />
      <div className='flex flex-row items-start gap-4'>
        <div className='w-10 h-10 rounded-full bg-muted-text'></div>
        <div className='flex flex-col items-start text-left justify-start text-gray-100'>
          <h4>{item.name}</h4>
        <p>{item.role}</p>
        </div>
      </div>
     <div className='flex flex-row gap-2 items-center mt-3'>
       <div className='flex flex-row gap-1 text-yellow-500 text-xl  items-center '>
       <RatingStars rating={item.rating}/>
      </div>
      <p className='text-gray-200 text-lg font-semibold'>{item.rating.toFixed(1)}</p>
     </div>
     {/* text body  */}
     <p className='text-left mt-5 text-gray-300 '>{item.text}</p>
                     </div></SwiperSlide>
      )
      
    })}
     
    </Swiper>
               </div>
     
    </div>
  )
}

export default TestimonialsSection



function RatingStars({
  rating,
  max = 5,
}: {
  rating: number;
  max?: number;
}) {
  console.log(rating)
  const stars = Array.from({ length: max }, (_, i) => {
    const value = i + 1;
    if (rating >= value) return "full";
    if (rating >= value - 0.5) return "half";
    return "empty";
  }) as Array<"full" | "half" | "empty">;

  return (
    <div className="flex items-center gap-1">
      {stars.map((v, idx) => (
        
        < StarIcon
          key={idx}
          variant={v}
          className="h-4 w-4 text-amber-400"
        />
      ))}
    
    </div>
  );
}



function StarIcon({
  variant,
  
}: {
  variant: "full" | "half" | "empty";
  className?: string;
}) {
 console.log(variant)
  if (variant === "half") {
    return (
      <FaStarHalfAlt/>
    );
  }

  if (variant === "empty") {
    return (
     <FaRegStar/>
    );
  }

  // full
  return (
   <FaStar/>
  );
}
