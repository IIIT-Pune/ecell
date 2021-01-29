import React from 'react'
import './hero.css';
import { Container } from 'reactstrap';
import Navbar from '../Navbar/navbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from '@material-ui/icons';

const Hero = () => {
  return (

    <div className="herobg">
      <Navbar />
      <div>
        <Container fluid className="mx-auto hero-container">
          <p style={{height:'20px', lineHeight:'30px'}}>Think. Innovate. Sell. Prosper.</p>
          <div className="centerele">
            <p>Entrepreneurship Cell IIIT Pune</p>
          </div>
          <div style={{margin:"15vh"}}>
            <button style={{width:"20vh"}}>EXPLORE</button>
          </div>
        </Container>
        <Container fluid style={{ left: '48px', bottom: '80px'}}>
          <div>
              <ul className="icons mb-0">
              <li><a href="#"><LinkedInIcon style={{fontSize:'45px'}}/></a></li>
              <li><a href="#"><InstagramIcon style={{fontSize:'45px'}}/></a></li>
              <li><a href="#"><FacebookIcon style={{fontSize:'45px'}}/></a></li>
              <div className="bar ml-2"></div>
              <div id="vertical"><a href="#vision" style={{textDecoration:'none'}}>click here &rarr;</a></div>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
