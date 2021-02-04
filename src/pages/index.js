import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vision from '../components/vision/vision';
import Events from '../components/Events/Events';
import Contact from '../components/Contactus/contact';
import Footer from '../components/footer/footer';
import Hero from '../components/mainpage/hero';
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>E-Cell | IIIT Pune</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Hero />
    <Vision />
    <Events />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
