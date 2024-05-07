import React from 'react'
import Header from "../component/header";
import Hero from "../component/hero";
import TotalDataIndonesia from "../component/dataIndonesia";
import Provinsi from "../component/dataProvinsi";
import DataSubmit from "../component/dataSubmit";
import Footer from "../component/footer";


export default function Home() {


  return (
    <>
      <Header />
      <Hero />
      <TotalDataIndonesia />
      <Provinsi />
      <DataSubmit />
      <Footer />
    </>
  );
}
