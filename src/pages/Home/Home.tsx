import React from 'react'
import "./Home.scss";
import { Footer } from "../../components";
import { AboutUs, Advantages, Header, OurWork, Reviews, Service, ServiceArea } from "./components";

export const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Advantages />
      <Service />
      <OurWork />
      <Reviews />
      <ServiceArea />
      <Footer />
    </>
  )
}
