import React, {useEffect} from 'react';
import "./form_style.css";
import Aos from 'aos';
import topLeftGradient from "../../images/Asset 2.svg";
import bottomRightGradient from "../../images/Asset 1.svg";
import LeftCard from './form_components/left-card.jsx';
import RightCard from './form_components/right-card.jsx';

function Recruitform() {
  useEffect(() => {
    Aos.init({ offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100 });
}, [])
  return (
    <div className="rec_body">
        <div className="container_form" data-aos="fade-up" style={{opacity: '1'}}>
          <img className="asset-2" src={topLeftGradient} alt="Design-shape" />
          <img className="asset-1" src={bottomRightGradient} alt="Design-shape" />
          <LeftCard />
          <RightCard />
        </div>
      </div>
  );
}

export default Recruitform;