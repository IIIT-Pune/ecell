import React ,{ useEffect } from 'react';
import hiringSvg from "../../../images/We-Are-Hiring-Stretched.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import { faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import '../form_style.css';

function LeftCard() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);
  return (
        <div className="card-1">
        <h1 style={{fontFamily:'Zen Tokyo Zoo'}}>
          E-Cell IIIT Pune <span>Recruitment Form</span>
        </h1>
        <img src={hiringSvg} alt="We-Are-Hiring" style={{marginTop:'5px'}}/>
        <div>
          <h1>
            Contact <span>Us</span>
          </h1>
          <div className="icons">
            <button
              className="icon-button"
              onClick={() => window.open('mailto:ecell@iiitp.ac.in','_blank')}
            >
              <FontAwesomeIcon icon={faEnvelope}/>
            </button>
            <button
              className="icon-button"
              onClick={() => window.open('https://instagram.com/ecell_iiitp?igshid=6ivz7097rmfr','_blank')}
            >
              <FontAwesomeIcon icon={faInstagram}/>
            </button>
            <button
              className="icon-button"
              onClick={() => window.open('https://www.linkedin.com/company/e-cell-iiit-pune','blank')}
            >
              <FontAwesomeIcon icon={faLinkedinIn}/>
            </button>
          </div>
        </div>
      </div>  
    );
}

export default LeftCard;