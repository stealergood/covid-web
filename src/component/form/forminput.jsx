import React, { useState } from 'react';
import { DataProvinsi } from '../../constants/provinsi';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function FormInput() {    
  const [formData, setFormData] = useState({
    province: '',
    status: '',
    quantity: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { province, status, quantity } = formData;
  
    const index = DataProvinsi.findIndex(item => item.provinsi === capitalizeFirstLetter(province));
  
    if (index !== -1) {
      switch (status.toLowerCase()) {
        case 'positif':
          DataProvinsi[index].positif += parseInt(quantity);
          break;
        case 'sembuh':
          DataProvinsi[index].sembuh += parseInt(quantity);
          break;
        case 'dirawat':
          DataProvinsi[index].dirawat += parseInt(quantity);
          break;
        case 'meninggal':
          DataProvinsi[index].meninggal += parseInt(quantity);
          break;
        default:
          console.log('Status tidak ditemukan:', status);
          break;
      }
    } else {
      console.log('Provinsi tidak ditemukan:', province);
    }
  
    setFormData({
      province: '',
      status: '',
      quantity: ''
    });
  };

  return (
    <form className="flex flex-col gap-3 md:gap-5 lg:gap-3 w-64 md:w-[310px] lg:w-64" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="provinceInput" className="text-gray-700 text-xl lg:text-lg">Provinsi</label>
        <input 
          id="provinceInput"
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="border border-primary-green focus:outline-primary-green rounded-md p-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="statusInput" className="text-gray-700 text-xl lg:text-lg">Status</label>
        <input 
          id="statusInput"
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-primary-green focus:outline-primary-green rounded-md p-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="quantityInput" className="text-gray-700 text-xl lg:text-lg">Jumlah</label>
        <input 
          id="quantityInput"
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border border-primary-green focus:outline-primary-green rounded-md p-1"
        />
      </div>
      <button className="w-full h-12 mt-5 bg-primary-green hover:bg-emerald-500 text-white rounded-lg ">Submit</button>
    </form>
  );
}
