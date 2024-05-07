import React from 'react'

export default function Header() {
  return (
    <div className="w-full md:h-20 lg:h-28 h-16 bg-primary-green flex justify-between">
        <div className="w-1/2 h-full flex items-center">
            <h1 className="lg:mx-20 mx-7 font-semibold md:text-2xl lg:text-3xl text-white">COVID ID</h1>
        </div>
        <div className="w-1/2 h-full mr-4 flex md:justify-center lg:justify-center items-center md:gap-8 gap-2 text-white md:text-lg lg:text-xl text-xs">
            <a href="#">Global</a>
            <a href="#">Indonesia</a>
            <a href="#">Provinsi</a>
            <a href="#">About</a>
        </div>
    </div>
  )
}
