import React from 'react'
import HeroImage from '../assets/svg_jsx/heroimage'

export default function Hero() {
  return (
    <div className="w-full h-screen p-10 md:px-24 lg:p-16 flex lg:flex-row flex-col-reverse justify-between">
      <div className="w-full lg:w-1/2 h-full mt-12 lg:mt-6 flex flex-col ">
        <h1 className="font-semibold text-5xl lg:text-7xl text-primary-green">Covid ID</h1>
        <h2 className="mt-2 md:text-xl text-lg text-[#118AB2]">Monitoring Perkembangan Covid</h2>
        <div className="md:w-3/4">
          <p className="mt-8 lg:mt-12 md:text-xl text-lg flex flex-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry`s standard dummy text ever since.</p>
        </div>
        <button className="w-52 h-16 lg:w-52 lg:h-16 mt-12 bg-primary-green hover:bg-emerald-500 rounded-lg text-white text-xl">Vaccine</button>
      </div>
      <div className="w-full lg:w-1/2 md:h-fit lg:mt-6 flex flex-wrap">
        <HeroImage className="w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[400px]"/>
      </div>
    </div>
  )
}
