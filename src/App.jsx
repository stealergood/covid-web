import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Provinsi from './pages/Provinsi/Provinsi';
import Indonesia from './pages/Indonesia/Indonesia';
import About from './pages/About/About';
import FormCovidContext from './context/FormCovidContext';
import { DataIndonesia } from './constants/indonesia';
import { DataProvinsi } from './constants/provinsi';

function App() {
  const [formDataIndonesia, setFormDataIndonesia] = useState(DataIndonesia);
  const [formDataProvinsi, setFormDataProvinsi] = useState(DataProvinsi);
  const [dataProvinsi, setDataProvinsi] = useState([]);

  const setContextValues = {
    formDataIndonesia,
    setFormDataIndonesia,
    formDataProvinsi,
    setFormDataProvinsi,
    dataProvinsi,
    setDataProvinsi,
  };

  return (
    <FormCovidContext.Provider value={setContextValues}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provinsi" element={<Provinsi/>} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </FormCovidContext.Provider>
  );
}

export default App;
