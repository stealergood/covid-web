import Header from "../../component/Header/Header";
import Hero from "../../component/Hero/Hero";
import DataProvinsi from "../../component/Provinsi/DataProvinsi";
import DataSubmit from "../../component/Submit/SubmitData";
import Footer from "../../component/Footer/Footer";
import { useContext } from "react";
import FormCovidContext from "../../context/FormCovidContext";

export default function Provinsi() {
  const { formDataProvinsi } = useContext(FormCovidContext);

  return (
    <>
      <Header />
      <Hero />
      <DataProvinsi data={formDataProvinsi}/>
      <DataSubmit />
      <Footer />
    </>
  );
}
