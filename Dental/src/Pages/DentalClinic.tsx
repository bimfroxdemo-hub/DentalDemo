import Header from "./Navbar";
import Hero from "../Pages/Hero";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import Testimonials from "../Pages/Testimonials";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import Gallery from "./Gallery";
import About from "./AboutUs";

const DentalClinic = () => {
  return (
    <div className="min-h-screen bg-background bg-blue-50 text-foreground">
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About (optional placeholder for now) */}
      <section id="about">
       <About/>
      </section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Team */}
      <section id="team">
        <Team />
      </section>

      {/* Gallery (placeholder for now) */}
      <section
        id="gallery">
        <Gallery/>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DentalClinic;
