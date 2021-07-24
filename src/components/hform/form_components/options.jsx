import React ,{ useEffect } from 'react';
import Aos from 'aos';
import acadYears from "../acad-year";
import '../form_style.css';

function Options() {
  useEffect(() => {
    Aos.init({ offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100 });
}, [])
  function Option(data) {
    return (
      <label className="radio">
        <input type="radio" name={data.name} id={data.id} required />
        <span>{data.option}</span>
      </label>
    );
  }

  return acadYears.map(Option);
}

export default Options;
