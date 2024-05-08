import React from 'react'
import Header from "../component/header";
import Hero from "../component/hero";
import Indonesia from "../component/dataIndonesia";
import Provinsi from "../component/dataProvinsi";
import DataSubmit from "../component/dataSubmit";
import Footer from "../component/footer";


export default function Home() {


  return (
    <>
      <Header />
      <Hero />
      <div id="indonesia">
        <Indonesia />
      </div>
      <div id="provinsi">
        <Provinsi />
      </div>
      <DataSubmit />
      <Footer />
    </>
  );
}
