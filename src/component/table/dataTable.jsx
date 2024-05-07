import React, { useState, useEffect } from 'react';
import { DataProvinsi } from "../../constants/provinsi";

export default function DataTable() {
  const [provinsiData, setProvinsiData] = useState(DataProvinsi);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Create a new array instance to force React to detect the change
      setProvinsiData([...DataProvinsi]);
    }, 5000); // Update every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <table className="border-solid border-2 border-gray-400">
      <thead className="border-solid border-2 border-gray-400">
        <tr className="divide-x-2 divide-gray-400 text-primary-green text-sm md:text-lg">
          <th className="p-2 md:w-14 lg:w-28 lg:h-16">No</th>
          <th className="p-2 md:w-28 lg:w-36 lg:h-16">Provinsi</th>
          <th className="p-1 md:w-28 lg:w-36 lg:h-16">Positif</th>
          <th className="p-1 md:w-28 lg:w-36 lg:h-16">Sembuh</th>
          <th className="p-1 md:w-28 lg:w-36 lg:h-16">Dirawat</th>
          <th className="p-1 md:w-28 lg:w-36 lg:h-16">Meninggal</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-gray-400 md:text-lg text-center">
        {provinsiData.map((item, index) => (
          <tr key={index} className="divide-x-2 divide-y-2 divide-gray-400">
            <td className="lg:h-12">{index + 1}</td>
            <td className="lg:h-12">{item.provinsi}</td>
            <td className="lg:h-12">{item.positif}</td>
            <td className="lg:h-12">{item.sembuh}</td>
            <td className="lg:h-12">{item.dirawat}</td>
            <td className="lg:h-12">{item.meninggal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
