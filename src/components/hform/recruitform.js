import React, {useEffect} from 'react';
import "./form_style.css";
import topLeftGradient from "../../images/Asset 2.svg";
import bottomRightGradient from "../../images/Asset 1.svg";
import LeftCard from './form_components/left-card.jsx';
import RightCard from './form_components/right-card.jsx';

function Recruitform() {
  return (
    <div className="rec_body">
      <br/>
        <div className="container_form" data-aos="fade-up" data-aos-duration="1000" style={{opacity: '1'}}>
          <img className="asset-2" src={topLeftGradient} alt="Design-shape" />
          <img className="asset-1" src={bottomRightGradient} alt="Design-shape" />
          <LeftCard />
          <RightCard />
        </div>
      </div>
  );
}

export default Recruitform;
