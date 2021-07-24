import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Recruitform from "../components/hform/recruitform";
import SEO from '../components/seo'
import EcellLogo from '../images/ecelliiitpune.jpeg'

const Recruit = () => (
    <>
        <SEO title="Recruitment | E-Cell IIIT Pune"
            image={EcellLogo} />
        <Recruitform />
    </>
)

export default Recruit