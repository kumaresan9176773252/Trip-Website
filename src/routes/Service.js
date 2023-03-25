import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../components/assets/service.jpg.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero1" heroImg={AboutImg} title="Service" btnClass="hide" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
