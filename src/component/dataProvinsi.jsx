import React from 'react'
import DataTabel from "./table/dataTable";

export default function DataProvinsi() {
  return (
    <div className="w-full h-screen py-20 lg:py-10 flex flex-col items-center lg:gap-20">
      <div className="w-full h-1/5 flex flex-col items-center lg:gap-2">
        <h1 className="font-semibold text-5xl md:text-7xl text-primary-green">Provinsi</h1>
        <h2 className="text-lg md:text-2xl text-[#118AB2]">Data Covid Berdasarkan Indonesia</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <DataTabel />
      </div>
    </div>
  );
}
