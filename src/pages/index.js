import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vision from '../components/vision/vision';
import Events from '../components/Events/Events';
import Contact from '../components/Contactus/contact';
import Footer from '../components/footer/footer';
import Hero from '../components/mainpage/hero';
import SEO from '../components/seo'
import EcellLogo from '../images/ecelliiitpune.jpeg'

const IndexPage = () => (
  <>
    <SEO title="E-Cell | IIIT Pune"
      description="The Enterprenuership cell of IIIT Pune aims to provide assistance to emerging enterprenuers
      to become leaders of the industry."
      image={EcellLogo}
    />
    <Hero />
    <Vision />
    <Events />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
