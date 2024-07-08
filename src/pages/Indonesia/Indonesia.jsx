import Header from "../../component/Header/Header";
import Hero from "../../component/Hero/Hero";
import Situation from "../../component/Situation/Situation";
import DataProvinsi from "../../component/Provinsi/DataProvinsi";
import Footer from "../../component/Footer/Footer";
import { useState, useEffect, useContext } from "react";
import FormCovidContext from "../../context/FormCovidContext";
import axios from "axios";

export default function Indonesia() {
  const [IndonesiaData, setIndonesiaData] = useState([]);
  const { dataProvinsi, setDataProvinsi } = useContext(FormCovidContext);

  useEffect(() => {
    const fetchIndonesiaData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/indonesia.json`)
      setIndonesiaData(response.data.indonesia);
      setDataProvinsi(response.data.regions);
    }
    fetchIndonesiaData();
  }, [setDataProvinsi]);

  return (
    <>
      <Header />
      <Hero />
      <Situation title="Indonesia" data={IndonesiaData} />
      <DataProvinsi data={dataProvinsi} />
      <Footer />
    </>
  )
}
