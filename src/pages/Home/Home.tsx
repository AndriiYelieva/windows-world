import React from 'react'
import "./Home.scss";
import { Footer } from "../../components";
import { FAQ, Gallery, Handmade, Header, } from "./components";

export const Home = () => {
  return (
    <>
      <Header />
      <Handmade />
      <FAQ />
      <Gallery />
      <Footer />
    </>
  )
}
