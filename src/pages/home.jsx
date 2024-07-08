import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import Footer from "../component/Footer/Footer";
import Situation from "../component/Situation/Situation";
import SituationByRegions from "../component/SituationByRegions/SituationByRegions";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [globalData, setGlobalData] = useState([]);
  const [regionsData, setRegionsData] = useState([]);

  useEffect(() => {
    const fetchGlobalData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/global.json`)
      setGlobalData(response.data.global);
      setRegionsData(response.data.regions);
    }
    fetchGlobalData();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Situation title="Global" data={globalData} />
      <SituationByRegions regionsData={regionsData} />
      <Footer />
    </>
  )
}
