import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../components/assets/2.jpg.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero1" heroImg={AboutImg} title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
