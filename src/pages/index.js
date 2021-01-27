import React from "react"
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vision from '../components/vision/vision';
import Events from '../components/Events/Events';
import Contact from '../components/Contactus/contact';
import Footer from '../components/footer/footer';


const IndexPage = () => (
  <>
    <Vision />
    <Events />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
