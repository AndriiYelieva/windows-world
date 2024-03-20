import "./Home.scss";
import { Footer } from "../../components";
import { AboutUs, Advantages, Header, OurWork, Riviews, Service, ServiceArea } from "./components";

export const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Advantages />
      <Service />
      <OurWork />
      <Riviews />
      <ServiceArea />
      <Footer />
    </>
  )
}
