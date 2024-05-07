import React from 'react'
import FormImage from "../assets/svg_jsx/formimage";
import FormInput from "./form/forminput";

export default function DataSubmit() {
  return (
    <div className="w-full h-screen bg-[#F8F9FA] flex flex-col lg:flex-row">
      <div className="w-full h-1/2 lg:w-5/6 lg:h-full flex items-center justify-center">
        <FormImage  className="w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[580px] lg:h-[580px]"/>
      </div>
      <div className="w-full h-1/2 lg:w-2/6 lg:h-full flex flex-col lg:justify-center items-center lg:items-start gap-8 md:gap-10 lg:gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-semibold text-primary-green">Form Covid</h1>
        <FormInput />
      </div>
    </div>
  )
}
