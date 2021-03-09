import React from 'react'
import './hero.css';
import { Container } from 'reactstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Navbars from '../Navbar/navbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Hero = () => {
  return (
    <div className="herobg">
      <Navbars />
      <div>
        <Container fluid className="mx-auto hero-container">
          <p style={{height:'20px', lineHeight:'30px'}}>Think. Innovate. Sell. Prosper.</p>
          <div className="centerele">
            <p>Entrepreneurship Cell IIIT Pune</p>
          </div>
          <div style={{margin:"15vh"}}>
            <button style={{ width: "20vh", padding: '5px' }}>EXPLORE</button>
          </div>
        </Container>
        <Container fluid style={{ left: '48px', bottom: '90px'}}>
          <div>
              <ul className="icons mb-0">
              <li><a href="https://www.linkedin.com/company/e-cell-iiit-pune"><LinkedInIcon style={{fontSize:'6vh'}}/></a></li>
              <li><a href="https://instagram.com/ecell_iiitp?igshid=6ivz7097rmfr"><InstagramIcon style={{fontSize:'6vh'}}/></a></li>
              <li><a href="#"><FacebookIcon style={{fontSize:'6vh'}}/></a></li>
              <div className="bar ml-2"></div>
              <div id="vertical"><a onClick={() => scrollTo('#event')} style={{textDecoration:'none'}}>EVENTS &rarr;</a></div>
            </ul>
          </div>
        </Container>
          <marquee className="marque">
          <a href="https://www.octaflyte.com/" target="_blank" style={{ textDecoration: 'none' }}>[UPADTE]E-Cell IIIT Pune is proud to present "Octaflyte Technologies Pvt. Ltd.", a startup founded by Umang Kalra (from IIIT Pune) and his team.
          Visit https://www.octaflyte.com/ for more details</a>
          </marquee>
      </div>
    </div>
  )
}

export default Hero
