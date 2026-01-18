
import React from 'react'

function ServicesSection() {
  return (
    <div className='w-full h-screen  bg-[url(/Services_bg.png)] bg-center bg-no-repeat bg-cover  rounded-4xl py-40 px-30' >
      <div className='flex flex-row items-start justify-between'>
        <h2 className='text-6xl font-semibold text-white'>My <span className='text-primary'>Services</span></h2>
      <p className='text-xl text-gray-200 w-200'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium doloremque odit beatae optio sapiente provident maxime earum eos vitae tenetur, rerum neque perferendis dignissimos eaque pariatur culpa a dolores.
      </p>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-20 w-full h-150'>
        <div className="bg-white/5 backdrop-blur-sm border border-white/40 rounded-2xl px-10 py-20">
        <h3 className='text-white text-2xl'>Landing Pages</h3><p className='text-md text-muted-text mt-3'>High-converting landing pages for startups and small businesses</p></div>
       <div className="bg-white/5 backdrop-blur-sm border border-white/40 rounded-2xl px-10 py-20">
        <h3 className='text-white text-2xl'>Frontend Development</h3><p className='text-md text-muted-text mt-3'>Turning UI designs into fast, responsive React interfaces</p></div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/40 rounded-2xl px-10 py-20">
        <h3 className='text-white text-2xl'>UI / UX Design</h3><p className='text-md text-muted-text mt-3 card'>Designing clean, user-focused interfaces with real product thinking</p></div>
       
        

      </div>
    </div>
  )
}

export default ServicesSection
