import React from 'react'

export default function Footer() {
  return (
    <div className="w-full h-30 md:h-36 p-8 md:px-11 bg-primary-green flex  gap-5">
      <div className="w-[57%] md:w-1/2 lg:w-[60%] flex flex-col justify-end">
        <h1 className="font-semibold text-2xl md:text-3xl text-white">COVID ID</h1>
        <h2 className="text-white md:text-lg">Developed by aufaroot18</h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center text-white text-sm md:text-xl gap-2 md:gap-5 lg:gap-8">
        <a href="#">Global</a>
        <a href="#indonesia">Indonesia</a>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center text-white text-sm md:text-xl gap-2 md:gap-5 lg:gap-8">
        <a href="#provinsi">Provinsi</a>
        <a href="#">About</a>
      </div>
    </div>
  )
}
