import React from 'react';
import { DataIndonesia } from "../constants/indonesia";

export default function TotalDataIndonesia() {
  const dataKeys = Object.keys(DataIndonesia);
  const dataValues = Object.values(DataIndonesia);

  const getColor = (key) => {
    switch (key) {
      case 'Confirmed':
        return "text-primary-green";
      case 'Recovered':
        return "text-[#118AB2]";
      case 'Deaths':
        return "text-[#EF476F]";
      default:
        return "text-black";
    }
  };

  return (
    <div className="w-full h-screen flex flex-col p-10 bg-[#F8F9FA]">
      <div className="w-full h-1/4 lg:h-1/5 flex flex-col items-center">
        <h1 className="font-semibold text-5xl md:text-7xl text-primary-green">Indonesia</h1>
        <h2 className="text-lg md:text-2xl text-[#118AB2]">Data Covid Berdasarkan Indonesia</h2>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row items-center lg:justify-around gap-10 lg:gap-0">
        {dataKeys.map((key, index) => (
          <div key={index} className="w-72 h-40 md:w-96 md:h-52 lg:w-80 lg:h-40 shadow-md rounded-lg flex flex-col justify-center items-center gap-4">
            <h1 className="font-semibold text-2xl md:text-4xl">{key}</h1>
            <h2 className={`text-4xl md:text-5xl lg:text-4xl ${getColor(key)}`}>{dataValues[index]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
